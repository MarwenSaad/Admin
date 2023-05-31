import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../Services/skills.service';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.css']
})
export class ManageSkillsComponent implements OnInit {
Skills:any
SkillsForm!:FormGroup
  constructor(private Services:SkillsService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.GetSkills()
    this.SkillsForm=this.builder.group({
      SkillsName:['',Validators.required],
      Descriptions:['',Validators.required]
    })
  }
  GetSkills()
  {
    this.Services.GetSkills().subscribe((res)=>{
      console.log(res)
      this.Skills=res
    })
  }
  AddSkills()
  {
    this.Services.AddSkills(this.SkillsForm.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
