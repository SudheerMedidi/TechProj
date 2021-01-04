import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/SharedModule/Services/CommonService';
import { HttpWrapperService } from 'src/SharedModule/Services/Http-wrapper.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    suburl: string;
    constructor(
        private httpWrapperService: HttpWrapperService,
        private commonservice: CommonService
    ) {
        this.suburl = 'api/projects/';
    }
    employeeWorkingProjects =
        [{ id: 1,name:'sudheer', projectName: 'StudentManagementProject', startdate: 'Dec 21 2019', position: 'Asst Team Leader', status: 'deployed', Info: 'If your project is creative, your abstract should state why you wanted to produce your particular piece or work and how it will expand the field in which you are working. It should also include information about the process as well as the end project. In creative works, this discussion might include why you chose to do something a certain way or what kinds of reactions you wanted to illicit from the reader/audience by creating the work a certain way'

         },
         { id: 2,name:'sudheer', projectName: 'StoreMaintainenceProject', startdate: 'Jan 21 2019', position: 'Team Member', status: 'InTest' , Info: 'Finally, you should include a statement that is an interpretation of your work. You should include a segment of the written piece or work and/or any information as to how your work has been received when presented to the public or to private audiences/readerships'

         },
          { id: 3, ame:'sudheer',projectName: 'OnlineBooksSellingProject', startdate: 'Mar 2 2019', position: 'Project Co-ordinator', status: 'InProgress',Info: 'If your project is a scientific, business, in other academic areas, your abstract should state specifically what problem your project addresses. Next, any type of project should include a background statement--no more than one or two sentences--if it is needed to understand the abstract. After that, you should tell the reader what data, new methodology, or innovative techniques you used to do your project.'

           },
           { id: 4,ame:'sudheer', projectName: 'EmployeeManagementproject', startdate: 'Feb 21 2020', position: 'Team Lead', status: 'HandledToClient', Info:' Endeavor Presentation Awards are given to support students’ travel to present research and/or creative works. Any USI undergraduate student is eligible, and students may receive an Endeavor Presentation Award even if they have not received an Endeavor Student Collaboration Award. A student who has received an Endeavor Student Collaboration Award, however, may also receive an Endeavor Presentation Award. Unfortunately, due to COVID-19 related travel restrictions, no Presentation Awards are being considered for the 2019-2020 school year. We hope to resume the program once these travel issues are resolved.'

        },]

    GetProjectDetails(projectId: number) {
        try {
            let data = this.employeeWorkingProjects.filter(i => i.id == projectId)[0];

            return data
        } catch (e) { }
    }
}
