function runCmd(command, inMemory, fromInput) {
    if (command != undefined) {
        if (fromInput) {
            input.value = "";
            echo(prompt + command);
        }
        if (inMemory && command != "") {
            if (command != memory[memory.length - 1]) {
                memory.push(command);
            }
            if (!navigatingInMemory || command != memory[memoryPos]) {
                memoryPos = memory.length - 1;
            }
            navigatingInMemory = false;
        }
        if (!toFile) {
            var commandName = command.split(" ")[0],
                args = command.split(" ");
            args.shift();

            if (commandName === "cls" || commandName === "clearscreen") {
                log.innerHTML = "";
            } else if (commandName === "exit") {
                window.open(document.URL, "about:blank", "width=977 height=455");
                window.close();
            } else if (commandName === "echo") {
                echo(toSpaces(args));
            } else if (commandName === "echo.") {
                echo("\n");
            } else if ((commandName === "ver") || (commandName === "version")) {
                echo("Web Shell v1.0");
                echo("Made with love by Joel Jolly.");
            } else if (commandName === "timezone") {
                getTimeZone();
            } else if (commandName === "time") {
                getTime();
            } else if (commandName === "day") {
                getDay();
            } else if (commandName === "date") {
                getDate();
            } else if (commandName === "os") {
                getOS();
            } else if (commandName === "networkstatus") {
                getNetworkStatus();
            } else if (commandName === "connectionspeed") {
                getConnectionSpeed();
            } else if (commandName === "connectiontype") {
                getConnectionType();
            } else if (commandName === "raminfo") {
                getRamInfo();
            } else if (commandName === "screenwidth") {
                getScreenWidth();
            } else if (commandName === "screenheight") {
                getScreenHeight();
            } else if ((commandName === "colordepth") || (commandName === "colourdepth")) {
                getColorDepth();
            } else if (commandName === "screenresolution") {
                getScreenResolution();
            } else if (commandName === "useragent") {
                getUserAgent();
            } else if (commandName === "batteryinfo") {
                getBatteryInfo();
            } else if (commandName === "webrtc") {
                getWebRTCInfo();
            } else if (commandName === "ipaddress") {
                getIPAddress(commandName);
            } else if (commandName === "developer" || commandName === "dev") {
                openLink(commandName);
            } else if (commandName === "") {
                errorhandling("Please enter a valid command");
            } else if (commandName.includes("open:")) {
                openLink(commandName);
            } else if (commandName.includes("url:")) {
                openUrl(commandName);
            } else if (commandName.includes("google:")) {
                searchViaGoogle(commandName);
            } else if (commandName.includes("instagram:")) {
                openInstagram(commandName);
            } else if (commandName.includes("onlyfans:")) {
                openOnlyfans(commandName);
            } else if (commandName.includes("x:")) {
                openX(commandName);
            } else if (commandName.includes("linkedin:")) {
                openLinkedin(commandName);
            } else if (commandName.includes("snapchat:")) {
                openSnapchat(commandName);
            } else if (commandName.includes("clubhouse:")) {
                openClubhouse(commandName);
            } else if (commandName.includes("twitter:")) {
                openTwitter(commandName);
            } else if (commandName.includes("github:")) {
                openGithub(commandName);
            } else {
                errorhandling();
            }
        } else {
            if (command != ")") {
                toExec.push(command);
            } else {
                toFile = false;
                toExec.forEach((command) => {
                    runCmd(command);
                });
                toExec = [];
            }
        }

        if (fromInput) {
            resetPrompt();
        }
    }
}