import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MemoryService} from "../../../services/memory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-memory',
  templateUrl: './create-memory.component.html',
  styleUrls: ['./create-memory.component.css']
})
export class CreateMemoryComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private memoryService: MemoryService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(800)]],
      imageUrl: ['', Validators.required],
    });
  }

  createMemory() {
    this.memoryService.createMemory(this.form.value).subscribe((data) => {
      this.router.navigate(['memory/all'])
    })
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }
}
