import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { StudentService } from "./student.service";

@Component({
  selector: "app-studentinfo",
  templateUrl: "./studentinfo.component.html",
  styleUrls: ["./studentinfo.component.scss"]
})
export class StudentinfoComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private StudentService: StudentService
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: "",
      lastName: ""
    });

    this.getAllStudent();
  }

  onSubmit() {
    this.StudentService.addStudent(this.myForm.value).subscribe(resp => {
      console.log(resp);
      console.log("Data added successfully");
    });
    /*     this.StudentService.editStudent(this.myForm.value)
    .subscribe(
      resp => {
        console.log(resp);
        console.log("Data updated successfully");
      }
    ) */
  }

  getAllStudent() {
    this.StudentService.getAllStudent().subscribe(resp => {
      console.log(resp);
      this.myForm.patchValue(resp);
    });
  }
}
