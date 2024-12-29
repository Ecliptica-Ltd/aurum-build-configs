var panel = panels()[0]; // Target the first panel
if (!panel) {
    panel = new Panel();
}

// Add Application Launcher (if not already present)
var launcher = panel.addWidget("org.kde.plasma.kicker");
launcher.currentConfigGroup = ["General"];
launcher.writeConfig("icon", "/usr/share/pixmaps/aurum-logo.svg"); // Custom Start menu icon

// Set Desktop Wallpaper
var desk = desktops()[0];
desk.wallpaperPlugin = "org.kde.image";
desk.currentConfigGroup = ["Wallpaper", "org.kde.image", "General"];
desk.writeConfig("Image", "file:///usr/share/backgrounds/aurum/0001.jpeg");