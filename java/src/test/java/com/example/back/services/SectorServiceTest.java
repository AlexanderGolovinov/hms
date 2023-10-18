package com.example.back.services;

import com.example.back.entity.Sector;
import com.example.back.repositories.SectorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class SectorServiceTest {

    @Mock
    private SectorRepository sectorRepository;

    @InjectMocks
    private SectorService sectorService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllSectors() {
        Sector sector = new Sector();
        sector.setId(1L);
        sector.setCodeValue(1L);
        sector.setCodeText("TEST");

        Sector sector2 = new Sector();
        sector2.setId(2L);
        sector2.setCodeValue(2L);
        sector2.setCodeText("TEST2");

        List<Sector> sectorList = new ArrayList<>();
        sectorList.add(sector);
        sectorList.add(sector2);

        when(sectorRepository.findAll()).thenReturn(sectorList);

        List<Sector> result = sectorService.getAllSectors();

        assertEquals(sectorList, result);
    }

}
