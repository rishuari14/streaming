import axios from "axios";

const params = {
    headers: {
      
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(url
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};


