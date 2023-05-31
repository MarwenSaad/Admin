import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalManager } from 'ngb-modal';
import { SkillsService } from '../Services/skills.service';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
Questions!:any[]
Responses:any
QuestionForm!:FormGroup
ResponseForm!:FormGroup
Id=this.route.snapshot.params["Id"]
  constructor(private modalService:ModalManager ,private builder:FormBuilder,private service:SkillsService ,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.GetQuestions()
    this.QuestionForm=this.builder.group({
      _Question: ['',Validators.required],
      TestId: ['',Validators.required],
      
    })
    this.ResponseForm=this.builder.group({
       ResponseData : ['',Validators.required],
       ResponseState :['',Validators.required],
       QuestionId : ['',Validators.required],
    })

  }
  GetQuestions()
  {
    this.service.GetQuestions(this.Id).subscribe((res:any)=>{
      this.Questions=res.map((item:any)=>{return{"Q":item[0],"R":item[1]}})
      console.log(this.Questions)})
  }

  AddQuestion()
  {
    this.QuestionForm.patchValue({
      TestId:this.Id
    })
    this.service.AddQuestions(this.QuestionForm.value).subscribe((res)=>{
      console.log(res)
      this.GetQuestions()
    })
  }
  AddResponse()
  {
    console.log(this.ResponseForm.value)
    let p =this.ResponseForm.value 
    if(p.ResponseState=="true")
    {
      this.ResponseForm.patchValue({
        ResponseState:true
      })
    }
    if(p.ResponseState=="false")
    {
      this.ResponseForm.patchValue({
        ResponseState:false
      })
    }
    this.service.AddResponse(this.ResponseForm.value).subscribe((res)=>{
      console.log(res)
      this.GetQuestions()
    })
  }
  
  DeleteQuestion(QuestionId:any)
  {
    this.service.DeleteQuestion(QuestionId).subscribe((res)=>{
      console.log(res)
      this.GetQuestions()
    })
    
  }

  open(Modal:any)
  {
    this.modalService.open(Modal, {
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
  }
  openR(Modal:any,Id:any)
  {
    this.ResponseForm.patchValue({
      QuestionId:Id
    })
    console.log(this.ResponseForm.value)
    this.modalService.open(Modal, {
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
  }
}
