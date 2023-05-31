import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  GetSkills()
  {
    return this.http.get(`${environment.baseUrl}/api/SkillsBanks`)
  }
  AddSkills(SkillsForm:any)
  {
    return this.http.get(`${environment.baseUrl}/api/SkillsBanks`,SkillsForm)
  }
  AddTest(TestForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/SkillsTests`,TestForm)
  }
  AddQuestions(QuestionsForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Questions`,QuestionsForm)
  }
  GetQuestions(TestId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Questions/AndResponse/${TestId}`)
  }
  DeleteQuestion(id:any)
  {
    return this.http.delete(`${environment.baseUrl}/api/Questions/${id}`)
  }
  AddResponse(ResponseForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Responses`,ResponseForm)
  }
  GetSkillsTest(id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/SkillsTests/Skills/${id}`)
  }
}
