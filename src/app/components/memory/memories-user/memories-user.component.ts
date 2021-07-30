import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Memory} from "../../../models/memory";
import {MemoryService} from "../memory.service";

@Component({
  selector: 'app-my-memories',
  templateUrl: './memories-user.component.html',
  styleUrls: ['./memories-user.component.css']
})
export class MemoriesUserComponent implements OnInit {
  userMemories$: Observable<Array<Memory>>

  constructor(private memoryService: MemoryService) {
  }

  ngOnInit(): void {
    this.userMemories$ = this.memoryService.getUserMemories();
  }

}
