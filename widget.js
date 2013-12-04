WAF.define('FaceDetection', function() {
    var widget = WAF.require('waf-core/widget');
    var FaceDetection = widget.create('FaceDetection');
    
	//in the Init phase of your widget, bind the code that is fired when the event occurs
	 FaceDetection.prototype.init = function () { 

        if(window.tracking) {
			this.videoCamera = new tracking.VideoCamera().hide().render(this.node).renderVideoCanvas(this.node);
			var ctx = this.videoCamera.canvas.context;

            this.videoCamera.track({
			    type: 'human',
			    data: 'frontal_face',
			    onFound: function(track) {
                    for (var i = 0, len = track.length; i < len; i++) {
                        var rect = track[i];
                        ctx.strokeStyle = "rgb(0,255,0)";
                        ctx.strokeRect(rect.x, rect.y, rect.size, rect.size);
                    }
                }
			});
        }
	}
	return FaceDetection;
	
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
