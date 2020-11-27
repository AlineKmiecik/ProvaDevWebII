import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { SistemaMedicoService } from 'src/app/services/sistema-medico.service';


@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.css']
})
export class CreateMedicoComponent implements OnInit {

  constructor(private service: SistemaMedicoService, private router: Router) { }
  Medico: Medico = new Medico();

  ngOnInit(): void {
  }

  create(): void {
    this.Medico.Nome = (<HTMLInputElement>document.getElementById("Nome")).value;;
    this.Medico.Crm = (<HTMLInputElement>document.getElementById("Crm")).value;;
    this.Medico.Especialidade = (<HTMLInputElement>document.getElementById("Especialidade")).value;;

   this.service.create(this.Medico).subscribe((Medico) => {
        console.log(Medico);
    });
    
    this.router.navigate([""]);
  }

}
