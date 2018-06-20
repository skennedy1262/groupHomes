app.constant('CONSTANTS', {
  api: {
    baseUrl: 'http://18.236.125.242/',
    path: 'groupHomes/api.php',
    query: '?x=',
    actions: {
      facility : {
        get: 'getLTCFacilities',
        getAll: 'getAllFacilities',
        edit: 'editFacility',
        search: 'getAllFacilitiesByAddress'
      },
      facilityRooms: {
        get: 'getFacilityRooms',
        add: 'addFacilityRoom',
        edit: 'editFacilityRoom'
      },
      facilityBed: {
        add: 'addFacilityBed',
        edit: 'editFacilityBed'
      },
      roomBed: {
        get: 'getFacilityRoomBed'
      },
      photo: {
        get: 'getLTCFacilityPhotos'
      },
      patientUpload: {
        add: 'addPatientUpload',
        delete: 'deletePatientUpload',
        get: 'getPatientUpload'
      },
      patientUploadFile: {
        get: 'getPatientUploadFile'
      },
      loginUser: {
        loginUser: 'loginUser'
      },

    // http://52.37.19.44/examApp.api/php?x=getPatientUpload
      // student: {
      //   get: 'getStudent',
      //   getAll: 'getStudents',
      //   getStudentTotalScores: 'getStudentTotalScores',
      //   getStudentSubScores: 'getStudentSubScores',
      //   getStudentAnswers: 'getStudentAnswers',
      //   getStudentSectionData: 'getStudentSectionData',
      //   getStudentTestList: 'getStudentTestList',
      //   getStudentTestAnswersTest: 'getStudentTestAnswersTest',
      //   getStudentTestAnswers: 'getStudentTestAnswers'
      // },
      // login: {
      //   loginUser: 'loginUser'
      // },
      // score: {
      //   getScoringRange: 'getScoringRange',
      //   getProjectedScore: 'getProjectedScore',
      //   getProjectedACTScore: 'getProjectedACTScore'
      // },
      // answer: {
      //   insertStudentAnswer: 'insertStudentAnswer'
      // },
      // class: {
      //   getActiveClasses: 'getActiveClasses',
      //   getTestsForClass: 'getTestsForClass',
      //   getQuestionSummary: 'getQuestionSummary'
      // }
    }
  }
});
