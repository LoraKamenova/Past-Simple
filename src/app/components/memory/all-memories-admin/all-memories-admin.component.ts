import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Memory} from "../../../models/memory";
import {MemoryService} from "../memory.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-all-memories-admin',
  templateUrl: './all-memories-admin.component.html',
  styleUrls: ['./all-memories-admin.component.css']
})
export class AllMemoriesAdminComponent implements OnInit {
  memory$: Observable<Array<Memory>>;

  constructor(private route: ActivatedRoute, private memoryService: MemoryService, private router: Router) { }

  ngOnInit(): void {
    this.memory$ = this.memoryService.getAllMemories();
  }

  deleteMemory(id) {
    console.log(id)
    this.memoryService.deleteMemory(id).subscribe((data) => {
      console.log('delete', data)
      this.memory$ = this.memoryService.getAllMemories();
    });
  }

}
