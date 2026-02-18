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

}
