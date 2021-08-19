import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Memory} from "../../../models/memory";
import {MemoryService} from "../../../services/memory.service";

@Component({
  selector: 'app-edit-memory',
  templateUrl: './edit-memory.component.html',
  styleUrls: ['./edit-memory.component.css']
})
export class EditMemoryComponent implements OnInit {
  memory: Memory;
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(700)]),
    imageUrl: new FormControl('', [Validators.required])
  });

  constructor(private route: ActivatedRoute, private memoryService: MemoryService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.memoryService.getMemory(id)
        .subscribe(data => {
          this.memory = data;
          console.log(this.memory)
          this.form.controls.title.setValue(this.memory.title);
          this.form.controls.description.setValue(this.memory.description);
          this.form.controls.imageUrl.setValue(this.memory.imageUrl);

        })
    });
  }

  editMemory() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.memory.title = this.form.value.title;
      this.memory.description = this.form.value.description;
      this.memory.imageUrl = this.form.value.imageUrl;
      this.memoryService.editMemory(id, this.memory).subscribe(data => {
        this.router.navigate(['memory/all/admin']);
      });
    });

  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }
}
