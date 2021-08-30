const isPackageDeprecated = require("../dist/index");

it("Detects deprecated packages", async () => {
    const data = await isPackageDeprecated("javascript");

    expect(data).toBeTruthy();
});

it("Detects deprecated package versions", async () => {
    const data = await isPackageDeprecated("discord.js", { version: "1.0.1" });

    expect(data).toBeTruthy();
});