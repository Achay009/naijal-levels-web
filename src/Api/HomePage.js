import axios from 'axios'




export default async function populateHomePage(){
    var homePageData = await axios.get('index');
    return homePageData;
}


