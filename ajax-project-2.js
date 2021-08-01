// I added a product to the cart in swiggy without logged in.
// Now my add to cart details store in local storage of my laptop.Now i displayed the product details using local storage methods.

localStorage;

Storage = {
    swgy_dweb_analytics_sequence_object: "{\"sid\":\"uzl705cd-d545-4bf1-9472-ff5f8507a577\",\"number\":8}",
    swgy_dweb_cartData: "{\"addressId\":\"\",\"restaurantId\":345473,\"cartItems\":{\"64629845\":{\"quantity\":1,\"items\":[{\"rewardType\":null,\"mealQuantity\":1,\"menu_item_id\":64629845,\"name\":\"Idly (2) + Vada (1)\",\"item_group_tag_id\":null,\"base_price\":6500,\"variants_price\":null,\"addons_price\":null,\"quantity\":1,\"free_item_quantity\":0,\"subtotal\":6500,\"subtotal_trade_discount\":0,\"subtotal_coupon_discount\":0,\"packing_charge\":700,\"total\":7200,\"final_price\":6500,\"effective_item_price\":75.25,\"strike_off_enabled\":false,\"is_customized\":null,\"id_hash\":\"54fbec74f4091a4c86ebcd4e87a7601c\",\"valid_addons\":[],\"valid_variants\":{\"exclude_list\":[],\"variant_groups\":[]},\"valid_variants_v2\":null,\"is_veg\":\"1\",\"isVeg\":1,\"addons\":[],\"variants\":[],\"item_taxes\":{\"service_tax\":0,\"vat\":0,\"service_charges\":0,\"GST\":3.25},\"GST_details\":{\"SGST\":1.625,\"CGST\":1.625,\"IGST\":0},\"cloudinaryImageId\":null,\"in_stock\":1,\"added_by_user_id\":-1,\"added_by_user_name\":\"\",\"group_user_item_map\":{},\"is_gstInclusive\":false,\"attributes\":null,\"item_status\":null,\"item_sub_status\":null,\"new_item_price\":0,\"fromCart\":true}],\"itemId\":64629845}},\"mealItems\":{}}",
    swgy_dweb_userLocation: "{\"lat\":14.4673154,\"lng\":78.8242089,\"area\":\"\",\"deliveryLocation\":\"Kadapa\",\"address\":\"Kadapa, Andhra Pradesh, India\",\"city\":\"kadapa\",\"mainText\":\"\"}",
    length: 3
}

console.log(Storage);

// 1)
const parseObj4 = localStorage.getItem("swgy_dweb_analytics_sequence_object");
console.log(JSON.parse(parseObj4));

result1 = {
    sid: "uzl705cd-d545-4bf1-9472-ff5f8507a577",
    number: 8,
};

// 2)
const parseObj5 = localStorage.getItem("swgy_dweb_cartData");
console.log(JSON.parse(parseObj5));

result2 = {
    addressId: "",
    restaurantId: 345473,
    cartItems: {
        64629845: {
            quantity: 1,
            items: [{
                rewardType: null,
                mealQuantity: 1,
                menu_item_id: 64629845,
                name: "Idly (2) + Vada (1)",
                item_group_tag_id: null,
                base_price: 6500,
                variants_price: null,
                addons_price: null,
                quantity: 1,
                free_item_quantity: 0,
                subtotal: 6500,
                subtotal_trade_discount: 0,
                subtotal_coupon_discount: 0,
                packing_charge: 700,
                total: 7200,
                final_price: 6500,
                effective_item_price: 75.25,
                strike_off_enabled: false,
                is_customized: null,
                id_hash: "54fbec74f4091a4c86ebcd4e87a7601c",
                valid_addons: [],
                valid_variants: {
                    exclude_list: [],
                    variant_groups: [],
                },
                valid_variants_v2: null,
                is_veg: "1",
                isVeg: 1,
                addons: [],
                variants: [],
                item_taxes: {
                    service_tax: 0,
                    vat: 0,
                    service_charges: 0,
                    GST: 3.25,
                },
                GST_details: {
                    SGST: 1.625,
                    CGST: 1.625,
                    IGST: 0,
                },
                cloudinaryImageId: null,
                in_stock: 1,
                added_by_user_id: -1,
                added_by_user_name: "",
                group_user_item_map: {},
                is_gstInclusive: false,
                attributes: null,
                item_status: null,
                item_sub_status: null,
                new_item_price: 0,
                fromCart: true,
            }, ],
            itemId: 64629845,
        },
    },
    mealItems: {},
};

// 3)
const parseObj6 = localStorage.getItem("swgy_dweb_userLocation");
console.log(JSON.parse(parseObj6));

result3 = {
    lat: 14.4673154,
    lng: 78.8242089,
    area: "",
    deliveryLocation: "Kadapa",
    address: "Kadapa, Andhra Pradesh, India",
    city: "kadapa",
    mainText: "",
};