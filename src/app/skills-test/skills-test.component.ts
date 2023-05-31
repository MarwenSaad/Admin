import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons,NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalManager, ModalModule } from 'ngb-modal';
import { SkillsService } from '../Services/skills.service';

@Component({
  selector: 'app-skills-test',
  templateUrl: './skills-test.component.html',
  styleUrls: ['./skills-test.component.css']
})
export class SkillsTestComponent implements OnInit {
Test:any
Tests:any
closeResult:any
Id=this.Activeroute.snapshot.params['Id']
SkillsName=this.Activeroute.snapshot.params['SkillsName']
TestForm!:FormGroup
  constructor(private modalService: ModalManager,private Activeroute:ActivatedRoute,private service:SkillsService,private builder:FormBuilder) {}

  ngOnInit(): void {
    this.GetTest()
    this.TestForm=this.builder.group({
        TestName: ['',Validators.required],
        Level: ['',Validators.required],
        SkillsBankId:['',Validators.required]
    })
  }

  AddNewTest()
  {
    this.TestForm.patchValue({
      SkillsBankId:this.Id
    })
    console.log(this.TestForm.value)
    this.service.AddTest(this.TestForm.value).subscribe((res)=>{
      console.log(res)
      this.GetTest()
    })
  }
  GetTest()
  {
    this.service.GetSkillsTest(this.Id).subscribe((res)=>{
      console.log(res)
      this.Tests=res
    })
  }


  open(myModal:any){
    this.modalService.open(myModal, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: false,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
}}
