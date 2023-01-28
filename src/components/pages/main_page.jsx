import Donut_map from "../donut_map/donut_map"
import Footer from "../footer/footer"
import Head_part from "../head_part_main/head_part_main"
import List from "../partners_rules/partners_rules"
import Product_inf_left from "../product_inf_left/product_inf_left"
import Product_inf_right from "../product_inf_right/product_inf_right"

const Main_page = () =>{
    return(
        <div>
            <Head_part></Head_part>
            <Product_inf_left></Product_inf_left>
            <Product_inf_right></Product_inf_right>
            <Product_inf_left></Product_inf_left>
            <Donut_map></Donut_map>
            <List></List>
            <Footer></Footer>
        </div>
    )
}

export default Main_page;