package com.example.timeplanner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/ingredients")
    public String ingrediants() {
        return "ingredients";
    }

    @GetMapping("/browse")
    public String browse() {
        return "browse";
    }

    @GetMapping("about")
    public String about() {
        return "about";
    }

    @GetMapping("/recipe/chicken-biryani")
    public String chickenBiryani() {
        return "fooditems/chicken-biryani";
    }

    @GetMapping("/recipe/paneer-butter-masala")
    public String paneerButterMasala() {
        return "fooditems/paneer-butter-masala";
    }

    @GetMapping("/recipe/masala-dosa")
    public String masalaDosa() {
        return "fooditems/masala-dosa";
    }

    @GetMapping("/recipe/gulab-jamun")
    public String gulabJamun() {
        return "fooditems/gulab-jamun";
    }

    @GetMapping("/recipe/egg-fried-rice")
    public String eggFriedRice() {
        return "fooditems/egg-fried-rice";
    }

    @GetMapping("/recipe/butter-chicken")
    public String butterChicken() {
        return "fooditems/butter-chicken";
    }

    @GetMapping("/recipe/vegetable-pulao")
    public String vegetablePulao() {
        return "fooditems/vegetable-pulao";
    }

    @GetMapping("/recipe/paneer-pulao")
    public String paneerPulao() {
        return "fooditems/paneer-pulao";
    }

    @GetMapping("/recipe/mushroom-biryani")
    public String mushroomBiryani() {
        return "fooditems/mushroom-biryani";
    }

    @GetMapping("/recipe/soya-biryani")
    public String soyaBiryani() {
        return "fooditems/soya-biryani";
    }

    @GetMapping("/recipe/kashmiri-pulao")
    public String kashmiriPulao() {
        return "fooditems/kashmiri-pulao";
    }

    @GetMapping("/buy")
    public String buy() {
        return "buy";
    }

    @GetMapping("/payment")
    public String payment() {
        return "payment";
    }

}
