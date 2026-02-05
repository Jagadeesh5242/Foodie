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

    // List of recipes - you can expand this
    private static final List<String> RECIPES = Arrays.asList(

            "Butter Chicken",
            "Paneer Tikka",
            "Dosa",
            "Samosa",
            "Chole Bhature",
            "Tandoori Chicken",
            "Chicken Tikka Masala",
            "Rogan Josh",
            "Palak Paneer",
            "Aloo Gobi",
            "Rajma",
            "Dal Makhani",
            "Garlic Naan",
            "Biryani Rice");

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

    @GetMapping("/biryani-rice")
    public ModelAndView biryaniRice() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("biryani-rice");
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
                .filter(recipe -> recipe.toLowerCase().startsWith(keyword.toLowerCase()))
                .limit(10)
                .collect(Collectors.toList());
    }
}
