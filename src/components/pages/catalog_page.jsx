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
    const [searchQuery, setSearchQuery] = useState([]);
    const sortedDonuts = useMemo(() => {
        console.log(searchQuery);
        return donuts.filter( donut => donut.name.toLowerCase().includes(searchQuery));
    }, [searchQuery, setSearchQuery]);

    useEffect(() => {
        async function fetchData(){
            const response = await DonutsServices.getDonuts();
            setDonuts(response);
        };
        fetchData();
    }, [sortedDonuts]);
    
    const setClickSearch = () =>{
        console.log("yes")
    }
    
    const setUsersSearchQuery = (query) => {
        setSearchQuery(query);
    }
    return(
        <div className="catalog_page_div">
            <Header></Header>
            <Head_part_catalog></Head_part_catalog>
            <Menu_catalog setUsersSearchQuery={setUsersSearchQuery} setClickSearch={setClickSearch}></Menu_catalog>
            <Catalog_list donuts={donuts} sortedDonuts={sortedDonuts}></Catalog_list>
            <Footer></Footer>
        </div>
    )
}

export default Catalog_page;