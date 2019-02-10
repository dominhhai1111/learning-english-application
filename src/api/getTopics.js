const getAllTopics = () => {
    return fetch('http://blackfriday2610.xyz/api/all_topics')
        .then((response) => response.json());
};

export default getAllTopics;