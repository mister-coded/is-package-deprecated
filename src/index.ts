import getRegistryData from "./utils/getRegistryData"
import latestVersion from "latest-version"

const isPackageDeprecated = async (
    pkg: string,
    options?: { version: string }
): Promise<boolean | void> => {

    return new Promise(async (res, rej) => {
        const fetch = (await getRegistryData(pkg)); // Fetch the npm registry
        if (typeof fetch == "undefined") return;

        const data = fetch.data;
        const version = options?.version ? options.version : await latestVersion(pkg); // Returns either the param options.version or the latest version of the package
        if (!pkg || typeof pkg != 'string') rej(`Expected to recieve type string for package, recieved ${typeof pkg}`); // If pkg isn't passed as a parameter the promise gets rejected

        try {
            res(data.versions[version].hasOwnProperty("deprecated"));
        } catch (err) {
            rej("This package version does not exist")
        }
    });

}

export = isPackageDeprecated;