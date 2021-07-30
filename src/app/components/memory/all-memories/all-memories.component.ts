import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Memory} from "../../../models/memory";
import {MemoryService} from "../memory.service";

@Component({
  selector: 'app-all-memories',
  templateUrl: './all-memories.component.html',
  styleUrls: ['./all-memories.component.css']
})
export class AllMemoriesComponent implements OnInit {
  memory$: Observable<Array<Memory>>;

  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.memory$ = this.memoryService.getAllMemories();
  }

}
