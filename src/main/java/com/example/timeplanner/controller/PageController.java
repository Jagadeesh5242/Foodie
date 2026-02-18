package com.example.timeplanner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String home() {
        return "index";
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

    @GetMapping("/recipe/veg-fried-rice")
    public String vegFriedRice() {
        return "fooditems/veg-fried-rice";
    }

    @GetMapping("/recipe/butter-chicken")
    public String butterChicken() {
        return "fooditems/butter-chicken";
    }
}
