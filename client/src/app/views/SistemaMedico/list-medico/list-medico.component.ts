import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { Medico } from 'src/app/models/Medico';
import { SistemaMedicoService } from 'src/app/services/sistema-medico.service';


@Component({
  selector: 'app-list-medico',
  templateUrl: './list-medico.component.html',
  styleUrls: ['./list-medico.component.css']
})
export class ListMedicoComponent implements OnInit {

  MedicoColumns: string[] = ["id", "Nome", "Crm", "Especialidade"];
  
  Medicos: Medico[] = [];
  MedicoTable: MatTableDataSource<Medico> = 
    new MatTableDataSource<Medico>(this.Medicos);

  constructor(private router: Router, private MedicoService: SistemaMedicoService) { }

  ngOnInit(): void {
    this.MedicoService.list().subscribe((lista) => {
      this.Medicos = lista;      
      this.MedicoTable = new MatTableDataSource<Medico>(this.Medicos);
    });
  }

  navigateToCreateMedico(): void {
    this.router.navigate(['medico/create']);
  }


}
