import { Component, OnInit } from '@angular/core';
import {Memory} from "../../../models/memory";
import {ActivatedRoute} from "@angular/router";
import {MemoryService} from "../memory.service";

@Component({
  selector: 'app-memory',
  templateUrl: './memory-details.component.html',
  styleUrls: ['./memory-details.component.css']
})
export class MemoryDetailsComponent implements OnInit {
  memory: Memory;

  constructor(private route: ActivatedRoute, private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.memoryService.getMemory(id).subscribe((data) => {
        this.memory = data;
      })
    })
  }

}
