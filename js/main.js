var create_job__form=document.querySelector('.create_job__form')
var input_companiy_name=document.querySelector('.input_companiy-name')
var job_title=document.querySelector('.job_title')
var salary=document.querySelector('.salary')
var all_job=document.querySelector('.all_job')
//keyin olib tashla =>create_job__btn
var create_job__btn=document.querySelector('.create_job__btn')

var jobs=[
    {
    id:1,
    company_name_i:"Google",
    job_title_i:'Fronted Developer',
    salary_i:"4000$",
},
{
    id:2,
    company_name_i:"Najot ta'lim",
    job_title_i:'Fronted Developer',
    salary_i:"1000$",}

]
jobs[null]
function repetition(){
    // b.preventDefault()
    all_job.innerHTML=null  
    for(var i=0;i< jobs.length;i++){
        var card=document.createElement('li');
        card.innerHTML=
        `<div class="card border-secondary mb-3 mx-auto col-10 " style="max-width: 30rem;">
        <div class="card-header"><h6>${jobs[i].job_title_i}</h6></div>
        <div class="card-body text-secondary">
          <p class="card-title">Company:<strong style="color: black;">${jobs[i].company_name_i}</strong style="color: black;"></p>
          <p class="card-text"> Sallary:<b style="color: black;">${jobs[i].salary_i}</b></p>
        </div>
      </div>`;
      all_job.appendChild(card)
        console.log(jobs[i])

    }

}
function onSubmit(a)
{
a.preventDefault()
var new_job_card=
{
    id:1,
    company_name_i:input_companiy_name.value.trim(),
    job_title_i:job_title.value.trim(),
    salary_i:salary.value.trim(),
}
jobs.push(new_job_card)

input_companiy_name.value=null;
job_title.value=null;
salary.value=null;
console.log(jobs);
repetition()

}
create_job__form.addEventListener('submit', onSubmit)

repetition()