/// <reference path=”../app/components/version/angular.js/angular.js"” />
angular.module('qrCodeApp', ['ja.qr'])
	.service('qrService', function () {
                var qr = {
                    size : 100,
                    correctionLevel:'M',
                    typeNumber:0,
                    inputMode : '',
                    image: true,
                }
                
                 qr.setUrl = function(url){
                    qr.qrcodeString = url
                    return qr;
                    
                }
		return qr;
		})
        .controller('qrCodeCtrl', function ($scope, qrService) {
            var qr = qrService;
            var qrcodeString = "";
            
            $scope.size = qr.size;
            $scope.correctionLevel = qr.correctionLevel;
            $scope.typeNumber = qr.typeNumber;
            $scope.inputMode = qr.inputMode;
            $scope.image = qr.image;
            
            $scope.generateQr = function (){
                qr = qr.setUrl($scope.string);
                $scope.qrcodeString = qr.qrcodeString;
            }
            $scope.qrcodeString = qrcodeString;
         
});
       
