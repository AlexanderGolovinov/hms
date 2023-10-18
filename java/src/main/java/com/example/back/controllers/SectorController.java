package com.example.back.controllers;

import com.example.back.entity.Sector;
import com.example.back.entity.User;
import com.example.back.repositories.SectorRepository;
import com.example.back.services.SectorService;
import com.example.back.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/api/sector")
public class SectorController {

    @Autowired
    private SectorService sectorService;

    @GetMapping(path = "/all")
    public ResponseEntity<List<Sector>> getAllSectors() {
        List<Sector> sectors = sectorService.getAllSectors();
        return new ResponseEntity<>(sectors, HttpStatus.OK);
    }

}
