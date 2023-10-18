package com.example.back.services;

import com.example.back.entity.Sector;
import com.example.back.entity.User;
import com.example.back.repositories.SectorRepository;
import com.example.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectorService {

    private SectorRepository sectorRepository;

    @Autowired
    public SectorService(SectorRepository sectorRepository) {
        this.sectorRepository = sectorRepository;
    }

    public List<Sector> getAllSectors() {
        return sectorRepository.findAll();
    }

}
