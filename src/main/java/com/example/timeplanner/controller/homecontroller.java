package com.example.timeplanner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class homecontroller {

    // List of all recipes (175+ total)
    private static final List<String> RECIPES = Arrays.asList(
            "Aloo Fry",
            "Aloo Gobi",
            "Aloo Tikki",
            "Andhra Chicken Fry",
            "Appam",
            "Authentic Kebab",
            "Avial",
            "Baati",
            "Bagara Rice",
            "Barfi",
            "Bendakaya Fry",
            "Bendakaya",
            "Bhakri",
            "Bhelpuri",
            "Bhujia",
            "Bihari Litti",
            "Biryani Dum Pukht",
            "Biryani Lucknowi",
            "Biryani Rice",
            "Biryani",
            "Bonda",
            "Bottle Gourd Fry",
            "Brinjal Fry",
            "Burdwan Chicken",
            "Burfi",
            "Butter Chicken",
            "Butter Naan",
            "Calcutta Biryani",
            "Cauliflower Masala",
            "Chakli",
            "Chana Masala",
            "Cheese Dosa",
            "Chettinad Chicken",
            "Chicken 65",
            "Chicken Biryani",
            "Chicken Curry",
            "Chicken Do Pyaza",
            "Chicken Tikka Masala",
            "Chikhalwali Chips",
            "Chikhalwali",
            "Chole Bhature",
            "Chotey Gosht",
            "Coconut Curry",
            "Coconut Rice",
            "Dal Makhani",
            "Dal Tadka",
            "Dhokla",
            "Dosa",
            "Dum Biryani",
            "Dum Pukht Chicken",
            "Egg Biryani",
            "Filter Coffee",
            "Fir Ni",
            "Fish Biryani",
            "Fish Curry",
            "Fish Jhol",
            "France Biryani",
            "Gajar Ka Halwa",
            "Galauti Kebab",
            "Garlic Naan",
            "Goan Vindaloo",
            "Gongura Chicken",
            "Gongura",
            "Green Curry",
            "Gujhia",
            "Gulab Jamun",
            "Haleem",
            "Halwa",
            "Hyderabadi Biryani",
            "Hyderabadi Haleem",
            "Idli",
            "Inippu",
            "Jalebi",
            "Kachumber Salad",
            "Kadhi",
            "Kalakand",
            "Kashmir Pulao",
            "Kebab",
            "Kerala Fish Curry",
            "Kesari",
            "Kheer",
            "Khichdi",
            "Konkan Fish Ampyal",
            "Kulcha",
            "Lachcha Paratha",
            "Laddu",
            "Ladoo",
            "Lemon Rice",
            "Luchi",
            "Lucknowi Biryani",
            "Lucknowi Kebab",
            "Makai Roti",
            "Makki Ki Roti",
            "Malpua",
            "Masala Dosa",
            "Masala Peanuts",
            "Medhu Vada",
            "Medu Vada",
            "Memoni Biryani",
            "Milk Cake",
            "Mirchi Ka Salan",
            "Mohan Thal",
            "Munakada Biryani",
            "Murgh Malaiwala",
            "Murukku",
            "Mushroom Curry",
            "Mutter Paneer",
            "Mutton Biryani",
            "Mutton Curry",
            "Naan",
            "Natu Kodi",
            "Nawabi Keema",
            "Nihari",
            "Onion Bhajiya",
            "Pakora",
            "Palak Cottage Cheese",
            "Palak Paneer",
            "Panasa Kaya Biryani",
            "Paneer Biryani",
            "Paneer Chakli",
            "Paneer Makhani Gravy",
            "Paneer Mushroom",
            "Paneer Tikka Masala",
            "Paneer Tikka",
            "Pani Puri",
            "Pani Puri Complete",
            "Paratha",
            "Paya",
            "Payesh",
            "Peda",
            "Pesarattu",
            "Petha",
            "Poha",
            "Pongal",
            "Poori",
            "Pulihora",
            "Puri",
            "Puttu",
            "Raita",
            "Rajma",
            "Rasam",
            "Rasam Tomato",
            "Rasgulla",
            "Rasmalai",
            "Rasogulla",
            "Red Curry",
            "Rogan Josh",
            "Rogan Josh Mutton",
            "Roti",
            "Saag Roti",
            "Sambar",
            "Samosa Chat",
            "Samosa",
            "Sandesh",
            "Seekh Kebab",
            "Sev Tameta",
            "Shami Kabab",
            "Sheekh Kabab",
            "Shrimp Curry",
            "Spring Roll",
            "Tamarind Rice",
            "Tandoori Chicken",
            "Tandoori Chicken Thighs",
            "Tandoori Paneer",
            "Tomato Based Gravy",
            "Tortilla",
            "Ulava Caru Biryani",
            "Unappakaya",
            "Undhyu Gujarati",
            "Upma",
            "Uttam Idli",
            "Uttapam",
            "Vada",
            "Vankai Biryani",
            "Vegetable Biryani");

    @GetMapping("/")
    public ModelAndView home() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return mv;
    }

    @GetMapping("/birayani")
    public ModelAndView biryani(@RequestParam(required = false) String param) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("biryani");
        return mv;
    }

    @GetMapping("/butter-chicken")
    public ModelAndView butterChicken() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken");
        return mv;
    }

    @GetMapping("/paneer-tikka")
    public ModelAndView paneerTikka() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-tikka");
        return mv;
    }

    @GetMapping("/dosa")
    public ModelAndView dosa() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dosa");
        return mv;
    }

    @GetMapping("/samosa")
    public ModelAndView samosa() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("samosa");
        return mv;
    }

    @GetMapping("/chole-bhature")
    public ModelAndView choleBhature() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature");
        return mv;
    }

    @GetMapping("/tandoori-chicken")
    public ModelAndView tandooriChicken() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken");
        return mv;
    }

    @GetMapping("/chicken-tikka-masala")
    public ModelAndView chickenTikkaMasala() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chicken-tikka-masala");
        return mv;
    }

    @GetMapping("/rogan-josh")
    public ModelAndView roganJosh() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh");
        return mv;
    }

    @GetMapping("/palak-paneer")
    public ModelAndView palakPaneer() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("palak-paneer");
        return mv;
    }

    @GetMapping("/aloo-gobi")
    public ModelAndView alooGobi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("aloo-gobi");
        return mv;
    }

    @GetMapping("/rajma")
    public ModelAndView rajma() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rajma");
        return mv;
    }

    @GetMapping("/dal-makhani")
    public ModelAndView dalMakhani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-makhani");
        return mv;
    }

    @GetMapping("/garlic-naan")
    public ModelAndView garlicNaan() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("garlic-naan");
        return mv;
    }

    @GetMapping("/chicken-biryani")
    public ModelAndView chickenBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chicken-biryani");
        return mv;
    }

    @GetMapping("/mutton-biryani")
    public ModelAndView muttonBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mutton-biryani");
        return mv;
    }

    @GetMapping("/fish-biryani")
    public ModelAndView fishBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("fish-biryani");
        return mv;
    }

    @GetMapping("/france-biryani")
    public ModelAndView franceBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("france-biryani");
        return mv;
    }

    @GetMapping("/paneer-biryani")
    public ModelAndView paneerBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-biryani");
        return mv;
    }

    @GetMapping("/egg-biryani")
    public ModelAndView eggBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("egg-biryani");
        return mv;
    }

    @GetMapping("/munakada-biryani")
    public ModelAndView munakadaBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("munakada-biryani");
        return mv;
    }

    @GetMapping("/vankai-biryani")
    public ModelAndView vankaiBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("vankai-biryani");
        return mv;
    }

    @GetMapping("/panasa-kaya-biryani")
    public ModelAndView panasaKayaBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("panasa-kaya-biryani");
        return mv;
    }

    @GetMapping("/ulava-caru-biryani")
    public ModelAndView ulavaCaruBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("ulava-caru-biryani");
        return mv;
    }

    // Telugu Vegetarian Dishes
    @GetMapping("/gongura")
    public ModelAndView gongura() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gongura");
        return mv;
    }

    @GetMapping("/pesarattu")
    public ModelAndView pesarattu() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("pesarattu");
        return mv;
    }

    @GetMapping("/bagara-rice")
    public ModelAndView bagaraRice() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bagara-rice");
        return mv;
    }

    @GetMapping("/lemon-rice")
    public ModelAndView lemonRice() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("lemon-rice");
        return mv;
    }

    @GetMapping("/tamarind-rice")
    public ModelAndView tamarindRice() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tamarind-rice");
        return mv;
    }

    @GetMapping("/coconut-rice")
    public ModelAndView coconutRice() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("coconut-rice");
        return mv;
    }

    @GetMapping("/bendakaya-fry")
    public ModelAndView bendakayaFry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bendakaya-fry");
        return mv;
    }

    @GetMapping("/brinjal-fry")
    public ModelAndView brinjalFry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("brinjal-fry");
        return mv;
    }

    @GetMapping("/bottle-gourd-fry")
    public ModelAndView bottleGourdFry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bottle-gourd-fry");
        return mv;
    }

    @GetMapping("/chikhalwali")
    public ModelAndView chikhalwali() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chikhalwali");
        return mv;
    }

    @GetMapping("/aloo-fry")
    public ModelAndView alooFry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("aloo-fry");
        return mv;
    }

    // Telugu Non-Vegetarian Dishes
    @GetMapping("/chicken-65")
    public ModelAndView chicken65() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chicken-65");
        return mv;
    }

    @GetMapping("/gongura-chicken")
    public ModelAndView gonguraChicken() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gongura-chicken");
        return mv;
    }

    @GetMapping("/andhra-chicken-fry")
    public ModelAndView andraChickenFry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("andhra-chicken-fry");
        return mv;
    }

    @GetMapping("/chicken-curry")
    public ModelAndView chickenCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chicken-curry");
        return mv;
    }

    @GetMapping("/mutton-curry")
    public ModelAndView muttonCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mutton-curry");
        return mv;
    }

    @GetMapping("/fish-curry")
    public ModelAndView fishCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("fish-curry");
        return mv;
    }

    @GetMapping("/shrimp-curry")
    public ModelAndView shrimpCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("shrimp-curry");
        return mv;
    }

    // South Indian Specialties
    @GetMapping("/idli")
    public ModelAndView idli() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("idli");
        return mv;
    }

    @GetMapping("/vada")
    public ModelAndView vada() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("vada");
        return mv;
    }

    @GetMapping("/uttapam")
    public ModelAndView uttapam() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("uttapam");
        return mv;
    }

    @GetMapping("/appam")
    public ModelAndView appam() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("appam");
        return mv;
    }

    @GetMapping("/masala-dosa")
    public ModelAndView masalaDosa() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("masala-dosa");
        return mv;
    }

    @GetMapping("/medhu-vada")
    public ModelAndView medhuVada() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("medhu-vada");
        return mv;
    }

    @GetMapping("/upma")
    public ModelAndView upma() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("upma");
        return mv;
    }

    @GetMapping("/puttu")
    public ModelAndView puttu() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("puttu");
        return mv;
    }

    @GetMapping("/filter-coffee")
    public ModelAndView filterCoffee() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("filter-coffee");
        return mv;
    }

    @GetMapping("/cheese-dosa")
    public ModelAndView cheeseDosa() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("cheese-dosa");
        return mv;
    }

    // Breads & Rotis
    @GetMapping("/roti")
    public ModelAndView roti() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("roti");
        return mv;
    }

    @GetMapping("/paratha")
    public ModelAndView paratha() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paratha");
        return mv;
    }

    @GetMapping("/kulcha")
    public ModelAndView kulcha() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kulcha");
        return mv;
    }

    @GetMapping("/puri")
    public ModelAndView puri() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("puri");
        return mv;
    }

    @GetMapping("/khichdi")
    public ModelAndView khichdi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("khichdi");
        return mv;
    }

    @GetMapping("/saag-roti")
    public ModelAndView saagRoti() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("saag-roti");
        return mv;
    }

    @GetMapping("/makai-roti")
    public ModelAndView makaiRoti() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("makai-roti");
        return mv;
    }

    @GetMapping("/tortilla")
    public ModelAndView tortilla() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tortilla");
        return mv;
    }

    @GetMapping("/lachcha-paratha")
    public ModelAndView lacchaParatha() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("lachcha-paratha");
        return mv;
    }

    @GetMapping("/butter-naan")
    public ModelAndView butterNaan() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-naan");
        return mv;
    }

    // Desserts & Sweets
    @GetMapping("/gulab-jamun")
    public ModelAndView gulabJamun() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun");
        return mv;
    }

    @GetMapping("/kheer")
    public ModelAndView kheer() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kheer");
        return mv;
    }

    @GetMapping("/rasmalai")
    public ModelAndView rasmalai() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rasmalai");
        return mv;
    }

    @GetMapping("/barfi")
    public ModelAndView barfi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("barfi");
        return mv;
    }

    @GetMapping("/halwa")
    public ModelAndView halwa() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("halwa");
        return mv;
    }

    @GetMapping("/jalebi")
    public ModelAndView jalebi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("jalebi");
        return mv;
    }

    @GetMapping("/laddu")
    public ModelAndView laddu() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("laddu");
        return mv;
    }

    @GetMapping("/rasgulla")
    public ModelAndView rasgulla() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rasgulla");
        return mv;
    }

    @GetMapping("/payesh")
    public ModelAndView payesh() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("payesh");
        return mv;
    }

    @GetMapping("/fir-ni")
    public ModelAndView firNi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("fir-ni");
        return mv;
    }

    @GetMapping("/malpua")
    public ModelAndView malpua() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("malpua");
        return mv;
    }

    @GetMapping("/mohan-thal")
    public ModelAndView mohanThal() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mohan-thal");
        return mv;
    }

    @GetMapping("/milk-cake")
    public ModelAndView milkCake() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("milk-cake");
        return mv;
    }

    @GetMapping("/peda")
    public ModelAndView peda() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("peda");
        return mv;
    }

    @GetMapping("/gajar-ka-halwa")
    public ModelAndView gajarKaHalwa() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gajar-ka-halwa");
        return mv;
    }

    // Snacks & Appetizers
    @GetMapping("/pakora")
    public ModelAndView pakora() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("pakora");
        return mv;
    }

    @GetMapping("/spring-roll")
    public ModelAndView springRoll() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("spring-roll");
        return mv;
    }

    @GetMapping("/samosa-chat")
    public ModelAndView samosaChat() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("samosa-chat");
        return mv;
    }

    @GetMapping("/bhelpuri")
    public ModelAndView bhelpuri() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bhelpuri");
        return mv;
    }

    @GetMapping("/pani-puri")
    public ModelAndView paniPuri() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("pani-puri");
        return mv;
    }

    @GetMapping("/sev-tameta")
    public ModelAndView sevTameta() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sev-tameta");
        return mv;
    }

    @GetMapping("/chikhalwali-chips")
    public ModelAndView chikhalwaliChips() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chikhalwali-chips");
        return mv;
    }

    @GetMapping("/masala-peanuts")
    public ModelAndView masalaPeanuts() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("masala-peanuts");
        return mv;
    }

    @GetMapping("/onion-bhajiya")
    public ModelAndView onionBhajiya() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("onion-bhajiya");
        return mv;
    }

    @GetMapping("/aloo-tikki")
    public ModelAndView alooTikki() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("aloo-tikki");
        return mv;
    }

    // Curries & Gravies
    @GetMapping("/paneer-tikka-masala")
    public ModelAndView paneerTikkaMasala() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-tikka-masala");
        return mv;
    }

    @GetMapping("/mutter-paneer")
    public ModelAndView matterPaneer() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mutter-paneer");
        return mv;
    }

    @GetMapping("/paneer-chakli")
    public ModelAndView paneerChakli() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-chakli");
        return mv;
    }

    @GetMapping("/mushroom-curry")
    public ModelAndView mushroomCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mushroom-curry");
        return mv;
    }

    @GetMapping("/cauliflower-masala")
    public ModelAndView cauliflowerMasala() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("cauliflower-masala");
        return mv;
    }

    @GetMapping("/tomato-based-gravy")
    public ModelAndView tomatoBasedGravy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tomato-based-gravy");
        return mv;
    }

    @GetMapping("/coconut-curry")
    public ModelAndView coconutCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("coconut-curry");
        return mv;
    }

    @GetMapping("/green-curry")
    public ModelAndView greenCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("green-curry");
        return mv;
    }

    @GetMapping("/red-curry")
    public ModelAndView redCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("red-curry");
        return mv;
    }

    @GetMapping("/nihari")
    public ModelAndView nihari() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("nihari");
        return mv;
    }

    // Regional Specialties
    @GetMapping("/hyderabadi-haleem")
    public ModelAndView hyderabadiHaleem() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("hyderabadi-haleem");
        return mv;
    }

    @GetMapping("/nawabi-keema")
    public ModelAndView nawabiKeema() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("nawabi-keema");
        return mv;
    }

    @GetMapping("/dum-pukht-chicken")
    public ModelAndView dumPukhtChicken() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dum-pukht-chicken");
        return mv;
    }

    @GetMapping("/burdwan-chicken")
    public ModelAndView burdwanChicken() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("burdwan-chicken");
        return mv;
    }

    @GetMapping("/lucknowi-kebab")
    public ModelAndView lucknowiKebab() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("lucknowi-kebab");
        return mv;
    }

    @GetMapping("/kashmir-pulao")
    public ModelAndView kashmirPulao() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kashmir-pulao");
        return mv;
    }

    @GetMapping("/dum-biryani")
    public ModelAndView dumBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dum-biryani");
        return mv;
    }

    @GetMapping("/authentic-kebab")
    public ModelAndView authenticKebab() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("authentic-kebab");
        return mv;
    }

    @GetMapping("/seekh-kebab")
    public ModelAndView seekhKebab() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("seekh-kebab");
        return mv;
    }

    @GetMapping("/galauti-kebab")
    public ModelAndView galauti() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("galauti-kebab");
        return mv;
    }

    // Additional routes for more recipes
    @GetMapping("/vegetable-biryani")
    public ModelAndView vegetableBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("vegetable-biryani");
        return mv;
    }

    @GetMapping("/tandoori-paneer")
    public ModelAndView tandooriPaneer() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-paneer");
        return mv;
    }

    @GetMapping("/memoni-biryani")
    public ModelAndView memoniBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("memoni-biryani");
        return mv;
    }

    @GetMapping("/hyderabadi-biryani")
    public ModelAndView hyderabadiBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("hyderabadi-biryani");
        return mv;
    }

    @GetMapping("/lucknowi-biryani")
    public ModelAndView lucknowiBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("lucknowi-biryani");
        return mv;
    }

    @GetMapping("/calcutta-biryani")
    public ModelAndView calcuttaBiryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("calcutta-biryani");
        return mv;
    }

    @GetMapping("/makki-ki-roti")
    public ModelAndView makkiKiRoti() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("makki-ki-roti");
        return mv;
    }

    @GetMapping("/sandesh")
    public ModelAndView sandesh() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sandesh");
        return mv;
    }

    @GetMapping("/kalakand")
    public ModelAndView kalakand() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kalakand");
        return mv;
    }

    @GetMapping("/gujhia")
    public ModelAndView gujhia() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gujhia");
        return mv;
    }

    @GetMapping("/ladoo")
    public ModelAndView ladoo() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("ladoo");
        return mv;
    }

    @GetMapping("/bonda")
    public ModelAndView bonda() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bonda");
        return mv;
    }

    @GetMapping("/chakli")
    public ModelAndView chakli() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chakli");
        return mv;
    }

    @GetMapping("/murukku")
    public ModelAndView murukku() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("murukku");
        return mv;
    }

    @GetMapping("/bhujia")
    public ModelAndView bhujia() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bhujia");
        return mv;
    }

    @GetMapping("/avial")
    public ModelAndView avial() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("avial");
        return mv;
    }

    @GetMapping("/baati")
    public ModelAndView baati() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("baati");
        return mv;
    }

    @GetMapping("/bendakaya")
    public ModelAndView bendakaya() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bendakaya");
        return mv;
    }

    @GetMapping("/bhakri")
    public ModelAndView bhakri() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bhakri");
        return mv;
    }

    @GetMapping("/bihari-litti")
    public ModelAndView bihariLitti() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bihari-litti");
        return mv;
    }

    @GetMapping("/biryani-dum-pukht")
    public ModelAndView biryaniDumPukht() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("biryani-dum-pukht");
        return mv;
    }

    @GetMapping("/biryani-rice")
    public ModelAndView biryaniRice() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("biryani-rice");
        return mv;
    }

    @GetMapping("/biryani")
    public ModelAndView biryani() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("biryani");
        return mv;
    }

    @GetMapping("/burfi")
    public ModelAndView burfi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("burfi");
        return mv;
    }

    @GetMapping("/chana-masala")
    public ModelAndView chanaMasala() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chana-masala");
        return mv;
    }

    @GetMapping("/dhokla")
    public ModelAndView dhokla() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dhokla");
        return mv;
    }

    @GetMapping("/haleem")
    public ModelAndView haleem() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("haleem");
        return mv;
    }

    @GetMapping("/inippu")
    public ModelAndView inippu() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("inippu");
        return mv;
    }

    @GetMapping("/kachumber-salad")
    public ModelAndView kachumberSalad() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kachumber-salad");
        return mv;
    }

    @GetMapping("/kadhi")
    public ModelAndView kadhi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kadhi");
        return mv;
    }

    @GetMapping("/kebab")
    public ModelAndView kebab() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kebab");
        return mv;
    }

    @GetMapping("/kesari")
    public ModelAndView kesari() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kesari");
        return mv;
    }

    @GetMapping("/luchi")
    public ModelAndView luchi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("luchi");
        return mv;
    }

    @GetMapping("/medu-vada")
    public ModelAndView meduVada() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("medu-vada");
        return mv;
    }

    @GetMapping("/mirchi-ka-salan")
    public ModelAndView mirchiKaSalan() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mirchi-ka-salan");
        return mv;
    }

    @GetMapping("/naan")
    public ModelAndView naan() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("naan");
        return mv;
    }

    @GetMapping("/natu-kodi")
    public ModelAndView natuKodi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("natu-kodi");
        return mv;
    }

    @GetMapping("/paya")
    public ModelAndView paya() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paya");
        return mv;
    }

    @GetMapping("/petha")
    public ModelAndView petha() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("petha");
        return mv;
    }

    @GetMapping("/poha")
    public ModelAndView poha() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("poha");
        return mv;
    }

    @GetMapping("/pongal")
    public ModelAndView pongal() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("pongal");
        return mv;
    }

    @GetMapping("/poori")
    public ModelAndView poori() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("poori");
        return mv;
    }

    @GetMapping("/pulihora")
    public ModelAndView pulihora() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("pulihora");
        return mv;
    }

    @GetMapping("/raita")
    public ModelAndView raita() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("raita");
        return mv;
    }

    @GetMapping("/rasam")
    public ModelAndView rasam() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rasam");
        return mv;
    }

    @GetMapping("/rasogulla")
    public ModelAndView rasogulla() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rasogulla");
        return mv;
    }

    @GetMapping("/sambar")
    public ModelAndView sambar() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar");
        return mv;
    }

    @GetMapping("/shami-kabab")
    public ModelAndView shamiKabab() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("shami-kabab");
        return mv;
    }

    @GetMapping("/sheekh-kabab")
    public ModelAndView sheekhKabab() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sheekh-kabab");
        return mv;
    }

    @GetMapping("/unappakaya")
    public ModelAndView unappakaya() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("unappakaya");
        return mv;
    }

    @GetMapping("/uttam-idli")
    public ModelAndView uttamIdli() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("uttam-idli");
        return mv;
    }

    // New recipes from untracked templates
    @GetMapping("/biryani-lucknowi")
    public ModelAndView biryaniLucknowi() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("biryani-lucknowi");
        return mv;
    }

    @GetMapping("/chettinad-chicken")
    public ModelAndView chettiadChicken() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chettinad-chicken");
        return mv;
    }

    @GetMapping("/chicken-do-pyaza")
    public ModelAndView chickenDoPyaza() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chicken-do-pyaza");
        return mv;
    }

    @GetMapping("/chotey-gosht")
    public ModelAndView choteyGosht() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chotey-gosht");
        return mv;
    }

    @GetMapping("/dal-tadka")
    public ModelAndView dalTadka() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka");
        return mv;
    }

    @GetMapping("/fish-jhol")
    public ModelAndView fishJhol() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("fish-jhol");
        return mv;
    }

    @GetMapping("/goan-vindaloo")
    public ModelAndView goanVindaloo() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("goan-vindaloo");
        return mv;
    }

    @GetMapping("/kerala-fish-curry")
    public ModelAndView keralaFishCurry() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry");
        return mv;
    }

    @GetMapping("/konkan-fish-ampyal")
    public ModelAndView konkanFishAmpyal() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("konkan-fish-ampyal");
        return mv;
    }

    @GetMapping("/murgh-malaiwala")
    public ModelAndView murghMalaiwala() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("murgh-malaiwala");
        return mv;
    }

    @GetMapping("/palak-cottage-cheese")
    public ModelAndView palakCottagecheese() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("palak-cottage-cheese");
        return mv;
    }

    @GetMapping("/paneer-makhani-gravy")
    public ModelAndView paneerMakhaniGravy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-makhani-gravy");
        return mv;
    }

    @GetMapping("/paneer-mushroom")
    public ModelAndView paneerMushroom() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom");
        return mv;
    }

    @GetMapping("/pani-puri-complete")
    public ModelAndView paniPuriComplete() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("pani-puri-complete");
        return mv;
    }

    @GetMapping("/rasam-tomato")
    public ModelAndView rasamTomato() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rasam-tomato");
        return mv;
    }

    @GetMapping("/rogan-josh-mutton")
    public ModelAndView roganJoshMutton() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-mutton");
        return mv;
    }

    @GetMapping("/tandoori-chicken-thighs")
    public ModelAndView tandooriChickenThighs() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-thighs");
        return mv;
    }

    @GetMapping("/undhyu-gujarati")
    public ModelAndView undhyuGujarati() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("undhyu-gujarati");
        return mv;
    }

    // Regional and Style Variants for Multiple Recipes
    // Butter Chicken Variants
    @GetMapping("/butter-chicken-classic")
    public ModelAndView butterChickenClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-classic");
        return mv;
    }

    @GetMapping("/butter-chicken-coastal-classic")
    public ModelAndView butterChickenCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-coastal-classic");
        return mv;
    }

    @GetMapping("/butter-chicken-coastal-creamy")
    public ModelAndView butterChickenCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-coastal-creamy");
        return mv;
    }

    @GetMapping("/butter-chicken-coastal-home-style")
    public ModelAndView butterChickenCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-coastal-home-style");
        return mv;
    }

    @GetMapping("/butter-chicken-coastal-mild")
    public ModelAndView butterChickenCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-coastal-mild");
        return mv;
    }

    @GetMapping("/butter-chicken-coastal-spicy")
    public ModelAndView butterChickenCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-coastal-spicy");
        return mv;
    }

    @GetMapping("/butter-chicken-east-indian-classic")
    public ModelAndView butterChickenEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-east-indian-classic");
        return mv;
    }

    @GetMapping("/butter-chicken-east-indian-creamy")
    public ModelAndView butterChickenEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-east-indian-creamy");
        return mv;
    }

    @GetMapping("/butter-chicken-east-indian-home-style")
    public ModelAndView butterChickenEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-east-indian-home-style");
        return mv;
    }

    @GetMapping("/butter-chicken-east-indian-mild")
    public ModelAndView butterChickenEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-east-indian-mild");
        return mv;
    }

    @GetMapping("/butter-chicken-east-indian-spicy")
    public ModelAndView butterChickenEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-east-indian-spicy");
        return mv;
    }

    @GetMapping("/butter-chicken-north-indian-classic")
    public ModelAndView butterChickenNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-north-indian-classic");
        return mv;
    }

    @GetMapping("/butter-chicken-north-indian-creamy")
    public ModelAndView butterChickenNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-north-indian-creamy");
        return mv;
    }

    @GetMapping("/butter-chicken-north-indian-home-style")
    public ModelAndView butterChickenNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-north-indian-home-style");
        return mv;
    }

    @GetMapping("/butter-chicken-north-indian-mild")
    public ModelAndView butterChickenNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-north-indian-mild");
        return mv;
    }

    @GetMapping("/butter-chicken-north-indian-spicy")
    public ModelAndView butterChickenNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-north-indian-spicy");
        return mv;
    }

    @GetMapping("/butter-chicken-south-indian-classic")
    public ModelAndView butterChickenSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-south-indian-classic");
        return mv;
    }

    @GetMapping("/butter-chicken-south-indian-creamy")
    public ModelAndView butterChickenSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-south-indian-creamy");
        return mv;
    }

    @GetMapping("/butter-chicken-south-indian-home-style")
    public ModelAndView butterChickenSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-south-indian-home-style");
        return mv;
    }

    @GetMapping("/butter-chicken-south-indian-mild")
    public ModelAndView butterChickenSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-south-indian-mild");
        return mv;
    }

    @GetMapping("/butter-chicken-south-indian-spicy")
    public ModelAndView butterChickenSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-south-indian-spicy");
        return mv;
    }

    @GetMapping("/butter-chicken-west-indian-classic")
    public ModelAndView butterChickenWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-west-indian-classic");
        return mv;
    }

    @GetMapping("/butter-chicken-west-indian-creamy")
    public ModelAndView butterChickenWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-west-indian-creamy");
        return mv;
    }

    @GetMapping("/butter-chicken-west-indian-home-style")
    public ModelAndView butterChickenWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-west-indian-home-style");
        return mv;
    }

    @GetMapping("/butter-chicken-west-indian-mild")
    public ModelAndView butterChickenWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-west-indian-mild");
        return mv;
    }

    @GetMapping("/butter-chicken-west-indian-spicy")
    public ModelAndView butterChickenWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("butter-chicken-west-indian-spicy");
        return mv;
    }

    // Chole Bhature Variants
    @GetMapping("/chole-bhature-coastal-classic")
    public ModelAndView choleBhatureCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-coastal-classic");
        return mv;
    }

    @GetMapping("/chole-bhature-coastal-creamy")
    public ModelAndView choleBhatureCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-coastal-creamy");
        return mv;
    }

    @GetMapping("/chole-bhature-coastal-home-style")
    public ModelAndView choleBhatureCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-coastal-home-style");
        return mv;
    }

    @GetMapping("/chole-bhature-coastal-mild")
    public ModelAndView choleBhatureCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-coastal-mild");
        return mv;
    }

    @GetMapping("/chole-bhature-coastal-spicy")
    public ModelAndView choleBhatureCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-coastal-spicy");
        return mv;
    }

    @GetMapping("/chole-bhature-east-indian-classic")
    public ModelAndView choleBhatureEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-east-indian-classic");
        return mv;
    }

    @GetMapping("/chole-bhature-east-indian-creamy")
    public ModelAndView choleBhatureEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-east-indian-creamy");
        return mv;
    }

    @GetMapping("/chole-bhature-east-indian-home-style")
    public ModelAndView choleBhatureEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-east-indian-home-style");
        return mv;
    }

    @GetMapping("/chole-bhature-east-indian-mild")
    public ModelAndView choleBhatureEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-east-indian-mild");
        return mv;
    }

    @GetMapping("/chole-bhature-east-indian-spicy")
    public ModelAndView choleBhatureEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-east-indian-spicy");
        return mv;
    }

    @GetMapping("/chole-bhature-north-indian-classic")
    public ModelAndView choleBhatureNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-north-indian-classic");
        return mv;
    }

    @GetMapping("/chole-bhature-north-indian-creamy")
    public ModelAndView choleBhatureNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-north-indian-creamy");
        return mv;
    }

    @GetMapping("/chole-bhature-north-indian-home-style")
    public ModelAndView choleBhatureNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-north-indian-home-style");
        return mv;
    }

    @GetMapping("/chole-bhature-north-indian-mild")
    public ModelAndView choleBhatureNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-north-indian-mild");
        return mv;
    }

    @GetMapping("/chole-bhature-north-indian-spicy")
    public ModelAndView choleBhatureNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-north-indian-spicy");
        return mv;
    }

    @GetMapping("/chole-bhature-south-indian-classic")
    public ModelAndView choleBhatureSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-south-indian-classic");
        return mv;
    }

    @GetMapping("/chole-bhature-south-indian-creamy")
    public ModelAndView choleBhatureSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-south-indian-creamy");
        return mv;
    }

    @GetMapping("/chole-bhature-south-indian-home-style")
    public ModelAndView choleBhatureSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-south-indian-home-style");
        return mv;
    }

    @GetMapping("/chole-bhature-south-indian-mild")
    public ModelAndView choleBhatureSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-south-indian-mild");
        return mv;
    }

    @GetMapping("/chole-bhature-south-indian-spicy")
    public ModelAndView choleBhatureSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-south-indian-spicy");
        return mv;
    }

    @GetMapping("/chole-bhature-west-indian-classic")
    public ModelAndView choleBhatureWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-west-indian-classic");
        return mv;
    }

    @GetMapping("/chole-bhature-west-indian-creamy")
    public ModelAndView choleBhatureWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-west-indian-creamy");
        return mv;
    }

    @GetMapping("/chole-bhature-west-indian-home-style")
    public ModelAndView choleBhatureWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-west-indian-home-style");
        return mv;
    }

    @GetMapping("/chole-bhature-west-indian-mild")
    public ModelAndView choleBhatureWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-west-indian-mild");
        return mv;
    }

    @GetMapping("/chole-bhature-west-indian-spicy")
    public ModelAndView choleBhatureWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("chole-bhature-west-indian-spicy");
        return mv;
    }

    // Dal Tadka Variants
    @GetMapping("/dal-tadka-coastal-classic")
    public ModelAndView dalTadkaCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-coastal-classic");
        return mv;
    }

    @GetMapping("/dal-tadka-coastal-creamy")
    public ModelAndView dalTadkaCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-coastal-creamy");
        return mv;
    }

    @GetMapping("/dal-tadka-coastal-home-style")
    public ModelAndView dalTadkaCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-coastal-home-style");
        return mv;
    }

    @GetMapping("/dal-tadka-coastal-mild")
    public ModelAndView dalTadkaCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-coastal-mild");
        return mv;
    }

    @GetMapping("/dal-tadka-coastal-spicy")
    public ModelAndView dalTadkaCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-coastal-spicy");
        return mv;
    }

    @GetMapping("/dal-tadka-east-indian-classic")
    public ModelAndView dalTadkaEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-east-indian-classic");
        return mv;
    }

    @GetMapping("/dal-tadka-east-indian-creamy")
    public ModelAndView dalTadkaEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-east-indian-creamy");
        return mv;
    }

    @GetMapping("/dal-tadka-east-indian-home-style")
    public ModelAndView dalTadkaEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-east-indian-home-style");
        return mv;
    }

    @GetMapping("/dal-tadka-east-indian-mild")
    public ModelAndView dalTadkaEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-east-indian-mild");
        return mv;
    }

    @GetMapping("/dal-tadka-east-indian-spicy")
    public ModelAndView dalTadkaEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-east-indian-spicy");
        return mv;
    }

    @GetMapping("/dal-tadka-north-indian-classic")
    public ModelAndView dalTadkaNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-north-indian-classic");
        return mv;
    }

    @GetMapping("/dal-tadka-north-indian-creamy")
    public ModelAndView dalTadkaNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-north-indian-creamy");
        return mv;
    }

    @GetMapping("/dal-tadka-north-indian-home-style")
    public ModelAndView dalTadkaNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-north-indian-home-style");
        return mv;
    }

    @GetMapping("/dal-tadka-north-indian-mild")
    public ModelAndView dalTadkaNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-north-indian-mild");
        return mv;
    }

    @GetMapping("/dal-tadka-north-indian-spicy")
    public ModelAndView dalTadkaNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-north-indian-spicy");
        return mv;
    }

    @GetMapping("/dal-tadka-south-indian-classic")
    public ModelAndView dalTadkaSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-south-indian-classic");
        return mv;
    }

    @GetMapping("/dal-tadka-south-indian-creamy")
    public ModelAndView dalTadkaSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-south-indian-creamy");
        return mv;
    }

    @GetMapping("/dal-tadka-south-indian-home-style")
    public ModelAndView dalTadkaSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-south-indian-home-style");
        return mv;
    }

    @GetMapping("/dal-tadka-south-indian-mild")
    public ModelAndView dalTadkaSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-south-indian-mild");
        return mv;
    }

    @GetMapping("/dal-tadka-south-indian-spicy")
    public ModelAndView dalTadkaSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-south-indian-spicy");
        return mv;
    }

    @GetMapping("/dal-tadka-west-indian-classic")
    public ModelAndView dalTadkaWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-west-indian-classic");
        return mv;
    }

    @GetMapping("/dal-tadka-west-indian-creamy")
    public ModelAndView dalTadkaWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-west-indian-creamy");
        return mv;
    }

    @GetMapping("/dal-tadka-west-indian-home-style")
    public ModelAndView dalTadkaWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-west-indian-home-style");
        return mv;
    }

    @GetMapping("/dal-tadka-west-indian-mild")
    public ModelAndView dalTadkaWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-west-indian-mild");
        return mv;
    }

    @GetMapping("/dal-tadka-west-indian-spicy")
    public ModelAndView dalTadkaWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("dal-tadka-west-indian-spicy");
        return mv;
    }

    // Gulab Jamun Variants
    @GetMapping("/gulab-jamun-coastal-classic")
    public ModelAndView gulabJamunCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-coastal-classic");
        return mv;
    }

    @GetMapping("/gulab-jamun-coastal-creamy")
    public ModelAndView gulabJamunCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-coastal-creamy");
        return mv;
    }

    @GetMapping("/gulab-jamun-coastal-home-style")
    public ModelAndView gulabJamunCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-coastal-home-style");
        return mv;
    }

    @GetMapping("/gulab-jamun-coastal-mild")
    public ModelAndView gulabJamunCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-coastal-mild");
        return mv;
    }

    @GetMapping("/gulab-jamun-coastal-spicy")
    public ModelAndView gulabJamunCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-coastal-spicy");
        return mv;
    }

    @GetMapping("/gulab-jamun-east-indian-classic")
    public ModelAndView gulabJamunEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-east-indian-classic");
        return mv;
    }

    @GetMapping("/gulab-jamun-east-indian-creamy")
    public ModelAndView gulabJamunEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-east-indian-creamy");
        return mv;
    }

    @GetMapping("/gulab-jamun-east-indian-home-style")
    public ModelAndView gulabJamunEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-east-indian-home-style");
        return mv;
    }

    @GetMapping("/gulab-jamun-east-indian-mild")
    public ModelAndView gulabJamunEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-east-indian-mild");
        return mv;
    }

    @GetMapping("/gulab-jamun-east-indian-spicy")
    public ModelAndView gulabJamunEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-east-indian-spicy");
        return mv;
    }

    @GetMapping("/gulab-jamun-north-indian-classic")
    public ModelAndView gulabJamunNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-north-indian-classic");
        return mv;
    }

    @GetMapping("/gulab-jamun-north-indian-creamy")
    public ModelAndView gulabJamunNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-north-indian-creamy");
        return mv;
    }

    @GetMapping("/gulab-jamun-north-indian-home-style")
    public ModelAndView gulabJamunNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-north-indian-home-style");
        return mv;
    }

    @GetMapping("/gulab-jamun-north-indian-mild")
    public ModelAndView gulabJamunNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-north-indian-mild");
        return mv;
    }

    @GetMapping("/gulab-jamun-north-indian-spicy")
    public ModelAndView gulabJamunNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-north-indian-spicy");
        return mv;
    }

    @GetMapping("/gulab-jamun-south-indian-classic")
    public ModelAndView gulabJamunSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-south-indian-classic");
        return mv;
    }

    @GetMapping("/gulab-jamun-south-indian-creamy")
    public ModelAndView gulabJamunSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-south-indian-creamy");
        return mv;
    }

    @GetMapping("/gulab-jamun-south-indian-home-style")
    public ModelAndView gulabJamunSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-south-indian-home-style");
        return mv;
    }

    @GetMapping("/gulab-jamun-south-indian-mild")
    public ModelAndView gulabJamunSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-south-indian-mild");
        return mv;
    }

    @GetMapping("/gulab-jamun-south-indian-spicy")
    public ModelAndView gulabJamunSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-south-indian-spicy");
        return mv;
    }

    @GetMapping("/gulab-jamun-west-indian-classic")
    public ModelAndView gulabJamunWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-west-indian-classic");
        return mv;
    }

    @GetMapping("/gulab-jamun-west-indian-creamy")
    public ModelAndView gulabJamunWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-west-indian-creamy");
        return mv;
    }

    @GetMapping("/gulab-jamun-west-indian-home-style")
    public ModelAndView gulabJamunWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-west-indian-home-style");
        return mv;
    }

    @GetMapping("/gulab-jamun-west-indian-mild")
    public ModelAndView gulabJamunWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-west-indian-mild");
        return mv;
    }

    @GetMapping("/gulab-jamun-west-indian-spicy")
    public ModelAndView gulabJamunWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("gulab-jamun-west-indian-spicy");
        return mv;
    }

    // Kerala Fish Curry Variants
    @GetMapping("/kerala-fish-curry-coastal-classic")
    public ModelAndView keralaFishCurryCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-coastal-classic");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-coastal-creamy")
    public ModelAndView keralaFishCurryCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-coastal-creamy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-coastal-home-style")
    public ModelAndView keralaFishCurryCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-coastal-home-style");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-coastal-mild")
    public ModelAndView keralaFishCurryCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-coastal-mild");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-coastal-spicy")
    public ModelAndView keralaFishCurryCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-coastal-spicy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-east-indian-classic")
    public ModelAndView keralaFishCurryEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-east-indian-classic");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-east-indian-creamy")
    public ModelAndView keralaFishCurryEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-east-indian-creamy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-east-indian-home-style")
    public ModelAndView keralaFishCurryEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-east-indian-home-style");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-east-indian-mild")
    public ModelAndView keralaFishCurryEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-east-indian-mild");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-east-indian-spicy")
    public ModelAndView keralaFishCurryEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-east-indian-spicy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-north-indian-classic")
    public ModelAndView keralaFishCurryNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-north-indian-classic");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-north-indian-creamy")
    public ModelAndView keralaFishCurryNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-north-indian-creamy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-north-indian-home-style")
    public ModelAndView keralaFishCurryNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-north-indian-home-style");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-north-indian-mild")
    public ModelAndView keralaFishCurryNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-north-indian-mild");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-north-indian-spicy")
    public ModelAndView keralaFishCurryNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-north-indian-spicy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-south-indian-classic")
    public ModelAndView keralaFishCurrySouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-south-indian-classic");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-south-indian-creamy")
    public ModelAndView keralaFishCurrySouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-south-indian-creamy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-south-indian-home-style")
    public ModelAndView keralaFishCurrySouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-south-indian-home-style");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-south-indian-mild")
    public ModelAndView keralaFishCurrySouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-south-indian-mild");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-south-indian-spicy")
    public ModelAndView keralaFishCurrySouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-south-indian-spicy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-west-indian-classic")
    public ModelAndView keralaFishCurryWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-west-indian-classic");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-west-indian-creamy")
    public ModelAndView keralaFishCurryWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-west-indian-creamy");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-west-indian-home-style")
    public ModelAndView keralaFishCurryWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-west-indian-home-style");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-west-indian-mild")
    public ModelAndView keralaFishCurryWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-west-indian-mild");
        return mv;
    }

    @GetMapping("/kerala-fish-curry-west-indian-spicy")
    public ModelAndView keralaFishCurryWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("kerala-fish-curry-west-indian-spicy");
        return mv;
    }

    // Paneer Mushroom Variants
    @GetMapping("/paneer-mushroom-coastal-classic")
    public ModelAndView paneerMushroomCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-coastal-classic");
        return mv;
    }

    @GetMapping("/paneer-mushroom-coastal-creamy")
    public ModelAndView paneerMushroomCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-coastal-creamy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-coastal-home-style")
    public ModelAndView paneerMushroomCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-coastal-home-style");
        return mv;
    }

    @GetMapping("/paneer-mushroom-coastal-mild")
    public ModelAndView paneerMushroomCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-coastal-mild");
        return mv;
    }

    @GetMapping("/paneer-mushroom-coastal-spicy")
    public ModelAndView paneerMushroomCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-coastal-spicy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-east-indian-classic")
    public ModelAndView paneerMushroomEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-east-indian-classic");
        return mv;
    }

    @GetMapping("/paneer-mushroom-east-indian-creamy")
    public ModelAndView paneerMushroomEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-east-indian-creamy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-east-indian-home-style")
    public ModelAndView paneerMushroomEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-east-indian-home-style");
        return mv;
    }

    @GetMapping("/paneer-mushroom-east-indian-mild")
    public ModelAndView paneerMushroomEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-east-indian-mild");
        return mv;
    }

    @GetMapping("/paneer-mushroom-east-indian-spicy")
    public ModelAndView paneerMushroomEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-east-indian-spicy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-north-indian-classic")
    public ModelAndView paneerMushroomNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-north-indian-classic");
        return mv;
    }

    @GetMapping("/paneer-mushroom-north-indian-creamy")
    public ModelAndView paneerMushroomNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-north-indian-creamy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-north-indian-home-style")
    public ModelAndView paneerMushroomNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-north-indian-home-style");
        return mv;
    }

    @GetMapping("/paneer-mushroom-north-indian-mild")
    public ModelAndView paneerMushroomNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-north-indian-mild");
        return mv;
    }

    @GetMapping("/paneer-mushroom-north-indian-spicy")
    public ModelAndView paneerMushroomNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-north-indian-spicy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-south-indian-classic")
    public ModelAndView paneerMushroomSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-south-indian-classic");
        return mv;
    }

    @GetMapping("/paneer-mushroom-south-indian-creamy")
    public ModelAndView paneerMushroomSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-south-indian-creamy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-south-indian-home-style")
    public ModelAndView paneerMushroomSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-south-indian-home-style");
        return mv;
    }

    @GetMapping("/paneer-mushroom-south-indian-mild")
    public ModelAndView paneerMushroomSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-south-indian-mild");
        return mv;
    }

    @GetMapping("/paneer-mushroom-south-indian-spicy")
    public ModelAndView paneerMushroomSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-south-indian-spicy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-west-indian-classic")
    public ModelAndView paneerMushroomWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-west-indian-classic");
        return mv;
    }

    @GetMapping("/paneer-mushroom-west-indian-creamy")
    public ModelAndView paneerMushroomWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-west-indian-creamy");
        return mv;
    }

    @GetMapping("/paneer-mushroom-west-indian-home-style")
    public ModelAndView paneerMushroomWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-west-indian-home-style");
        return mv;
    }

    @GetMapping("/paneer-mushroom-west-indian-mild")
    public ModelAndView paneerMushroomWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-west-indian-mild");
        return mv;
    }

    @GetMapping("/paneer-mushroom-west-indian-spicy")
    public ModelAndView paneerMushroomWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("paneer-mushroom-west-indian-spicy");
        return mv;
    }

    // Rogan Josh Variants
    @GetMapping("/rogan-josh-coastal-classic")
    public ModelAndView roganJoshCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-coastal-classic");
        return mv;
    }

    @GetMapping("/rogan-josh-coastal-creamy")
    public ModelAndView roganJoshCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-coastal-creamy");
        return mv;
    }

    @GetMapping("/rogan-josh-coastal-home-style")
    public ModelAndView roganJoshCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-coastal-home-style");
        return mv;
    }

    @GetMapping("/rogan-josh-coastal-mild")
    public ModelAndView roganJoshCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-coastal-mild");
        return mv;
    }

    @GetMapping("/rogan-josh-coastal-spicy")
    public ModelAndView roganJoshCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-coastal-spicy");
        return mv;
    }

    @GetMapping("/rogan-josh-east-indian-classic")
    public ModelAndView roganJoshEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-east-indian-classic");
        return mv;
    }

    @GetMapping("/rogan-josh-east-indian-creamy")
    public ModelAndView roganJoshEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-east-indian-creamy");
        return mv;
    }

    @GetMapping("/rogan-josh-east-indian-home-style")
    public ModelAndView roganJoshEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-east-indian-home-style");
        return mv;
    }

    @GetMapping("/rogan-josh-east-indian-mild")
    public ModelAndView roganJoshEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-east-indian-mild");
        return mv;
    }

    @GetMapping("/rogan-josh-east-indian-spicy")
    public ModelAndView roganJoshEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-east-indian-spicy");
        return mv;
    }

    @GetMapping("/rogan-josh-north-indian-classic")
    public ModelAndView roganJoshNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-north-indian-classic");
        return mv;
    }

    @GetMapping("/rogan-josh-north-indian-creamy")
    public ModelAndView roganJoshNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-north-indian-creamy");
        return mv;
    }

    @GetMapping("/rogan-josh-north-indian-home-style")
    public ModelAndView roganJoshNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-north-indian-home-style");
        return mv;
    }

    @GetMapping("/rogan-josh-north-indian-mild")
    public ModelAndView roganJoshNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-north-indian-mild");
        return mv;
    }

    @GetMapping("/rogan-josh-north-indian-spicy")
    public ModelAndView roganJoshNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-north-indian-spicy");
        return mv;
    }

    @GetMapping("/rogan-josh-south-indian-classic")
    public ModelAndView roganJoshSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-south-indian-classic");
        return mv;
    }

    @GetMapping("/rogan-josh-south-indian-creamy")
    public ModelAndView roganJoshSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-south-indian-creamy");
        return mv;
    }

    @GetMapping("/rogan-josh-south-indian-home-style")
    public ModelAndView roganJoshSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-south-indian-home-style");
        return mv;
    }

    @GetMapping("/rogan-josh-south-indian-mild")
    public ModelAndView roganJoshSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-south-indian-mild");
        return mv;
    }

    @GetMapping("/rogan-josh-south-indian-spicy")
    public ModelAndView roganJoshSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-south-indian-spicy");
        return mv;
    }

    @GetMapping("/rogan-josh-west-indian-classic")
    public ModelAndView roganJoshWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-west-indian-classic");
        return mv;
    }

    @GetMapping("/rogan-josh-west-indian-creamy")
    public ModelAndView roganJoshWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-west-indian-creamy");
        return mv;
    }

    @GetMapping("/rogan-josh-west-indian-home-style")
    public ModelAndView roganJoshWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-west-indian-home-style");
        return mv;
    }

    @GetMapping("/rogan-josh-west-indian-mild")
    public ModelAndView roganJoshWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-west-indian-mild");
        return mv;
    }

    @GetMapping("/rogan-josh-west-indian-spicy")
    public ModelAndView roganJoshWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("rogan-josh-west-indian-spicy");
        return mv;
    }

    // Sambar Variants
    @GetMapping("/sambar-coastal-classic")
    public ModelAndView sambarCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-coastal-classic");
        return mv;
    }

    @GetMapping("/sambar-coastal-creamy")
    public ModelAndView sambarCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-coastal-creamy");
        return mv;
    }

    @GetMapping("/sambar-coastal-home-style")
    public ModelAndView sambarCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-coastal-home-style");
        return mv;
    }

    @GetMapping("/sambar-coastal-mild")
    public ModelAndView sambarCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-coastal-mild");
        return mv;
    }

    @GetMapping("/sambar-coastal-spicy")
    public ModelAndView sambarCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-coastal-spicy");
        return mv;
    }

    @GetMapping("/sambar-east-indian-classic")
    public ModelAndView sambarEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-east-indian-classic");
        return mv;
    }

    @GetMapping("/sambar-east-indian-creamy")
    public ModelAndView sambarEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-east-indian-creamy");
        return mv;
    }

    @GetMapping("/sambar-east-indian-home-style")
    public ModelAndView sambarEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-east-indian-home-style");
        return mv;
    }

    @GetMapping("/sambar-east-indian-mild")
    public ModelAndView sambarEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-east-indian-mild");
        return mv;
    }

    @GetMapping("/sambar-east-indian-spicy")
    public ModelAndView sambarEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-east-indian-spicy");
        return mv;
    }

    @GetMapping("/sambar-north-indian-classic")
    public ModelAndView sambarNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-north-indian-classic");
        return mv;
    }

    @GetMapping("/sambar-north-indian-creamy")
    public ModelAndView sambarNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-north-indian-creamy");
        return mv;
    }

    @GetMapping("/sambar-north-indian-home-style")
    public ModelAndView sambarNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-north-indian-home-style");
        return mv;
    }

    @GetMapping("/sambar-north-indian-mild")
    public ModelAndView sambarNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-north-indian-mild");
        return mv;
    }

    @GetMapping("/sambar-north-indian-spicy")
    public ModelAndView sambarNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-north-indian-spicy");
        return mv;
    }

    @GetMapping("/sambar-south-indian-classic")
    public ModelAndView sambarSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-south-indian-classic");
        return mv;
    }

    @GetMapping("/sambar-south-indian-creamy")
    public ModelAndView sambarSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-south-indian-creamy");
        return mv;
    }

    @GetMapping("/sambar-south-indian-home-style")
    public ModelAndView sambarSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-south-indian-home-style");
        return mv;
    }

    @GetMapping("/sambar-south-indian-mild")
    public ModelAndView sambarSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-south-indian-mild");
        return mv;
    }

    @GetMapping("/sambar-south-indian-spicy")
    public ModelAndView sambarSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-south-indian-spicy");
        return mv;
    }

    @GetMapping("/sambar-traditional")
    public ModelAndView sambarTraditional() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-traditional");
        return mv;
    }

    @GetMapping("/sambar-west-indian-classic")
    public ModelAndView sambarWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-west-indian-classic");
        return mv;
    }

    @GetMapping("/sambar-west-indian-creamy")
    public ModelAndView sambarWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-west-indian-creamy");
        return mv;
    }

    @GetMapping("/sambar-west-indian-home-style")
    public ModelAndView sambarWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-west-indian-home-style");
        return mv;
    }

    @GetMapping("/sambar-west-indian-mild")
    public ModelAndView sambarWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-west-indian-mild");
        return mv;
    }

    @GetMapping("/sambar-west-indian-spicy")
    public ModelAndView sambarWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sambar-west-indian-spicy");
        return mv;
    }

    // Tandoori Chicken Variants
    @GetMapping("/tandoori-chicken-coastal-classic")
    public ModelAndView tandooriChickenCoastalClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-coastal-classic");
        return mv;
    }

    @GetMapping("/tandoori-chicken-coastal-creamy")
    public ModelAndView tandooriChickenCoastalCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-coastal-creamy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-coastal-home-style")
    public ModelAndView tandooriChickenCoastalHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-coastal-home-style");
        return mv;
    }

    @GetMapping("/tandoori-chicken-coastal-mild")
    public ModelAndView tandooriChickenCoastalMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-coastal-mild");
        return mv;
    }

    @GetMapping("/tandoori-chicken-coastal-spicy")
    public ModelAndView tandooriChickenCoastalSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-coastal-spicy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-east-indian-classic")
    public ModelAndView tandooriChickenEastIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-east-indian-classic");
        return mv;
    }

    @GetMapping("/tandoori-chicken-east-indian-creamy")
    public ModelAndView tandooriChickenEastIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-east-indian-creamy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-east-indian-home-style")
    public ModelAndView tandooriChickenEastIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-east-indian-home-style");
        return mv;
    }

    @GetMapping("/tandoori-chicken-east-indian-mild")
    public ModelAndView tandooriChickenEastIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-east-indian-mild");
        return mv;
    }

    @GetMapping("/tandoori-chicken-east-indian-spicy")
    public ModelAndView tandooriChickenEastIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-east-indian-spicy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-north-indian-classic")
    public ModelAndView tandooriChickenNorthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-north-indian-classic");
        return mv;
    }

    @GetMapping("/tandoori-chicken-north-indian-creamy")
    public ModelAndView tandooriChickenNorthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-north-indian-creamy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-north-indian-home-style")
    public ModelAndView tandooriChickenNorthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-north-indian-home-style");
        return mv;
    }

    @GetMapping("/tandoori-chicken-north-indian-mild")
    public ModelAndView tandooriChickenNorthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-north-indian-mild");
        return mv;
    }

    @GetMapping("/tandoori-chicken-north-indian-spicy")
    public ModelAndView tandooriChickenNorthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-north-indian-spicy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-south-indian-classic")
    public ModelAndView tandooriChickenSouthIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-south-indian-classic");
        return mv;
    }

    @GetMapping("/tandoori-chicken-south-indian-creamy")
    public ModelAndView tandooriChickenSouthIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-south-indian-creamy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-south-indian-home-style")
    public ModelAndView tandooriChickenSouthIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-south-indian-home-style");
        return mv;
    }

    @GetMapping("/tandoori-chicken-south-indian-mild")
    public ModelAndView tandooriChickenSouthIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-south-indian-mild");
        return mv;
    }

    @GetMapping("/tandoori-chicken-south-indian-spicy")
    public ModelAndView tandooriChickenSouthIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-south-indian-spicy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-west-indian-classic")
    public ModelAndView tandooriChickenWestIndianClassic() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-west-indian-classic");
        return mv;
    }

    @GetMapping("/tandoori-chicken-west-indian-creamy")
    public ModelAndView tandooriChickenWestIndianCreamy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-west-indian-creamy");
        return mv;
    }

    @GetMapping("/tandoori-chicken-west-indian-home-style")
    public ModelAndView tandooriChickenWestIndianHomeStyle() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-west-indian-home-style");
        return mv;
    }

    @GetMapping("/tandoori-chicken-west-indian-mild")
    public ModelAndView tandooriChickenWestIndianMild() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-west-indian-mild");
        return mv;
    }

    @GetMapping("/tandoori-chicken-west-indian-spicy")
    public ModelAndView tandooriChickenWestIndianSpicy() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("tandoori-chicken-west-indian-spicy");
        return mv;
    }

    @GetMapping("/search")
    public ModelAndView search(@RequestParam(required = false) String keyword) {
        ModelAndView mv = new ModelAndView();
        mv.addObject("keyword", keyword != null ? keyword : "");
        mv.addObject("recipes", RECIPES.stream()
                .filter(r -> r.toLowerCase().contains(keyword != null ? keyword.toLowerCase() : ""))
                .collect(Collectors.toList()));
        mv.setViewName("search-results");
        return mv;
    }

    // API endpoint for recipe autocomplete/suggestions
    @GetMapping("/api/recipes/search")
    @ResponseBody
    public List<String> searchRecipes(@RequestParam String keyword) {
        return RECIPES.stream()
                .filter(recipe -> recipe.toLowerCase().contains(keyword.toLowerCase()))
                .limit(15)
                .collect(Collectors.toList());
    }

    // Menu page - displays all recipes with advanced filtering and sorting
    @GetMapping("/menu")
    public ModelAndView menu() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("menu");
        return mv;
    }

    // API endpoint to get all recipes
    @GetMapping("/api/all-recipes")
    @ResponseBody
    public List<String> getAllRecipes() {
        return RECIPES.stream().collect(Collectors.toList());
    }
}
