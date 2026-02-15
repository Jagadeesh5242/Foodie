package com.example.timeplanner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class homecontroller {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/menu")
    public String menu() {
        // Placeholder for menu page
        return "redirect:/";
    }

    @GetMapping("/search")
    public String search() {
        // Placeholder for search results page
        return "redirect:/";
    }
}
