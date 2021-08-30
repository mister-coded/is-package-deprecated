import axios from "axios";

export = async (
    pkg: string,
): Promise<any> => {
    return new Promise(async (res, rej) => {
        try {
            const data = await axios({
                method: "GET",
                url: `https://registry.npmjs.org/${pkg}`,
                responseType: "json"
            });

            res(data);

        } catch (err) {

            rej("Couldn't fetch the npm registry");
        }
    })
}