import Footer from "../footer/footer";
import React from "react";
import Header from "../header/header";
import Head_part_catalog from "../head_part_catalog/head_part_catalog";
import Menu_catalog from "../menu_catalog/menu_catalog";
import Catalog_list from "../catalog_list/catalog_list";
import { useState } from "react";
import { useEffect } from "react";
import DonutsServices from "../services/DonutsServices";
import { useMemo } from "react";

const Catalog_page = () =>{
    const [donuts, setDonuts] = useState([]);
    const [sortedDonuts, setSortedPosts] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortQuery, setSortQuery] = useState([]);

    const searchDonuts = useMemo(() => {
        if(searchQuery)
            return donuts.filter( donut => donut.name.toLowerCase().includes(searchQuery));
        else
            return donuts;
    }, [searchQuery, donuts]);

    const sortAndSearchDonuts = useMemo(()=>{
        if(sortQuery == "" || sortQuery == "all")
        {
            return searchDonuts;
        }
        else
            return searchDonuts.filter(donut => donut.category == sortQuery)
    }, [sortQuery, searchDonuts])

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData(){
        const response = await DonutsServices.getDonuts();
        console.log(response);
        setDonuts(response);
    };
    
    const setUsersSearchQuery = (query) => {
        setSearchQuery(query);
    }

    const setSortQueryFunc = (query) =>{
        setSortQuery(query);
        console.log(query);
    }
    return(
        <div className="catalog_page_div">
            <Header></Header>
            <Head_part_catalog></Head_part_catalog>
            <Menu_catalog setSortQueryFunc={setSortQueryFunc} setUsersSearchQuery={setUsersSearchQuery}></Menu_catalog>
            {
                sortAndSearchDonuts.length
                ?
                    <Catalog_list donuts={sortAndSearchDonuts}></Catalog_list>
                :   <div className="fnt_sz_30">There is no donuts :(</div>
            }
            <Footer></Footer>
        </div>
    )
}

export default Catalog_page;