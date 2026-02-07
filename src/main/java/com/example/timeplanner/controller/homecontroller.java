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

    // List of all recipes (157 total)
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
            "Chicken 65",
            "Chicken Biryani",
            "Chicken Curry",
            "Chicken Tikka Masala",
            "Chikhalwali Chips",
            "Chikhalwali",
            "Chole Bhature",
            "Coconut Curry",
            "Coconut Rice",
            "Dal Makhani",
            "Dhokla",
            "Dosa",
            "Dum Biryani",
            "Dum Pukht Chicken",
            "Egg Biryani",
            "Filter Coffee",
            "Fir Ni",
            "Fish Biryani",
            "Fish Curry",
            "France Biryani",
            "Gajar Ka Halwa",
            "Galauti Kebab",
            "Garlic Naan",
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
            "Kesari",
            "Kheer",
            "Khichdi",
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
            "Palak Paneer",
            "Panasa Kaya Biryani",
            "Paneer Biryani",
            "Paneer Chakli",
            "Paneer Tikka Masala",
            "Paneer Tikka",
            "Pani Puri",
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
            "Rasgulla",
            "Rasmalai",
            "Rasogulla",
            "Red Curry",
            "Rogan Josh",
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
            "Tandoori Paneer",
            "Tomato Based Gravy",
            "Tortilla",
            "Ulava Caru Biryani",
            "Unappakaya",
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
}
