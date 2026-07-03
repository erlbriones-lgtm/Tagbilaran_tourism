import fs from "fs";
import path from "path";

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) {
    console.warn(`[Consolidate] Warning: Source folder ${from} does not exist.`);
    return;
  }
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  const copyRecursive = (sourcePath, targetPath) => {
    const stat = fs.lstatSync(sourcePath);

    if (stat.isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }

      fs.readdirSync(sourcePath).forEach((entry) => {
        copyRecursive(path.join(sourcePath, entry), path.join(targetPath, entry));
      });
      return;
    }

    if (!stat.isFile()) {
      return;
    }

    if (path.basename(sourcePath) === "newback.webp" && from.endsWith("temp")) {
      console.log(`[Consolidate] Skipping ${sourcePath} to preserve user uploaded file.`);
      return;
    }

    fs.copyFileSync(sourcePath, targetPath);
    console.log(`[Consolidate] Copied ${sourcePath} -> ${targetPath}`);
  };

  fs.readdirSync(from).forEach((entry) => {
    copyRecursive(path.join(from, entry), path.join(to, entry));
  });
}

const publicWebpPath = path.join(process.cwd(), "public", "webp");
if (!fs.existsSync(publicWebpPath)) {
  fs.mkdirSync(publicWebpPath, { recursive: true });
}

const publicFontPath = path.join(process.cwd(), "public", "Font");
if (!fs.existsSync(publicFontPath)) {
  fs.mkdirSync(publicFontPath, { recursive: true });
}

const publicFontPathLower = path.join(process.cwd(), "public", "font");
if (!fs.existsSync(publicFontPathLower)) {
  fs.mkdirSync(publicFontPathLower, { recursive: true });
}

const publicTempPath = path.join(process.cwd(), "public", "temp");
if (!fs.existsSync(publicTempPath)) {
  fs.mkdirSync(publicTempPath, { recursive: true });
}

// Ensure source folders are consolidated into public/webp
copyFolderSync(path.join(process.cwd(), "src", "data", "webp"), publicWebpPath);
copyFolderSync(path.join(process.cwd(), "Downloadables", "webp"), publicWebpPath);
copyFolderSync(path.join(process.cwd(), "TemporaryPictures"), publicWebpPath);
copyFolderSync(path.join(process.cwd(), "temp"), publicWebpPath);
copyFolderSync(path.join(process.cwd(), "temp"), publicTempPath);
copyFolderSync(path.join(process.cwd(), "font"), publicFontPath);
copyFolderSync(path.join(process.cwd(), "font"), publicFontPathLower);
copyFolderSync(path.join(process.cwd(), "Travel"), path.join(process.cwd(), "public", "Travel"));
copyFolderSync(path.join(process.cwd(), "BARANGAY LOGO"), path.join(process.cwd(), "public", "BARANGAY LOGO"));
copyFolderSync(path.join(process.cwd(), "BARANGAY LETTERING"), path.join(process.cwd(), "public", "BARANGAY LETTERING"));
copyFolderSync(path.join(process.cwd(), "B-LOGO"), path.join(process.cwd(), "public", "B-LOGO"));
copyFolderSync(path.join(process.cwd(), "B-LETTER"), path.join(process.cwd(), "public", "B-LETTER"));
copyFolderSync(path.join(process.cwd(), "Map Barangay"), path.join(process.cwd(), "public", "Map Barangay"));
copyFolderSync(path.join(process.cwd(), "TemporaryPictures"), path.join(process.cwd(), "public", "TemporaryPictures"));

// Robust inline task execution to auto-repair formatting variations in App.tsx
try {
  const appPath = path.join(process.cwd(), "src", "App.tsx");
  if (fs.existsSync(appPath)) {
    let code = fs.readFileSync(appPath, "utf8");
    if (code.includes("</div></div>")) {
      code = code.replace("</div></div>", "</div>");
      fs.writeFileSync(appPath, code, "utf8");
      console.log("[Consolidate] JSX closing tags in App.tsx auto-repaired successfully.");
    }
  }
} catch (err) {
  console.error("[Consolidate] App.tsx repair failed:", err);
}

console.log("[Consolidate] Assets consolidated successfully!");
