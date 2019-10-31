webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  #canvas {\r\n    border: 2px dashed #cccccc;\r\n  }\r\n  .main-title{\r\n    margin-top: 10px;\r\n  }\r\n  .images-item {\r\n    width: 48%;\r\n    cursor: pointer;\r\n    -webkit-transition: .5s ease;\r\n    -webkit-transition: .5s ease;\r\n    padding: 3px;\r\n    max-width: 120px;\r\n  }\r\n  .images-item:hover {\r\n    opacity: 0.7;\r\n  }\r\n  .images-item-upload {\r\n    width: 80%;\r\n    cursor: pointer;\r\n    padding-bottom: 10px;\r\n    -webkit-transition: .5s ease;\r\n    -webkit-transition: .5s ease;\r\n  }\r\n  .images-item-upload:hover {\r\n    opacity: 0.7;\r\n  }\r\n  .custom-item {\r\n    border-bottom: 2px solid #f3f3f3;\r\n  }\r\n  .custom-item .custom-item-title {\r\n    color: #666666;\r\n    font-weight: 600;\r\n  }\r\n  .custom-item .custom-item-body {\r\n    padding: 10px 0;\r\n  }\r\n  .max-height{\r\n    overflow: auto;\r\n    max-height: 300px;\r\n  }\r\n  .carousel{\r\n    width: 100%;\r\n    margin-left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n  }\r\n  .c-image{\r\n    border-radius: 15px !important;\r\n    height: 400px;\r\n    width: 600px !important;\r\n    cursor: pointer;\r\n  }\r\n  .red{\r\n    background-color:red !important;\r\n  }\r\n  .search-btn{\r\n  width: 100%;\r\n}\r\n  .rectangle{\r\n  height: 3em;\r\n  width: 5em;\r\n  background-color: #888;\r\n  border-radius:3px;\r\n  margin:5px;\r\n}\r\n  .rectangle-hollow{\r\n  height: 3em;\r\n  width: 5em;\r\n  border-radius:3px;\r\n  border:5px solid #888;\r\n  margin:5px;\r\n}\r\n  .triangle{\r\n  width: 0;\r\n\theight: 0;\r\n\tborder-left: 25px solid transparent;\r\n\tborder-right: 25px solid transparent;\r\n\tborder-bottom: 50px solid #888;\r\n}\r\n  .hollow-triangle {\r\n  position: relative;\r\n  width:0;\r\n  border-bottom:solid 50px #888;\r\n  border-right:solid 30px transparent;\r\n  border-left:solid 30px transparent;\r\n}\r\n  .hollow-triangle .empty {\r\n  position: absolute;\r\n  top:9px;\r\n  left:-21px;\r\n  width:0;\r\n  border-bottom:solid 36px white;\r\n  border-right:solid 21px transparent;\r\n  border-left:solid 21px transparent;\r\n}\r\n  .polyline {\r\n  width: 5em;\r\n  height: 3em;\r\n  border: solid 5px #888;\r\n  border-color: transparent transparent #888 transparent;\r\n  border-radius: 0 0 240px 50%/60px;\r\n}\r\n  .cursor{\r\n  cursor: pointer;\r\n}\r\n  .hv-blue:hover{\r\n  background-color: #ccfff5;\r\n}\r\n  .t-div{\r\n  margin-left: 1rem;\r\n}\r\n  .hide{\r\n  visibility: hidden;\r\n}\r\n  .custom-content{\r\n  position: relative !important;\r\n\r\n}\r\n  .custom-content canvas{\r\n  /* position: fixed !important;\r\n margin-left: 33%;\r\n margin-top: 10%;  */\r\n margin-left: 20%;\r\n}\r\n  .c-container{\r\n  padding: 3%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12 main-title\">\r\n      TagPab\r\n    </div>\r\n    <br><br>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6 col-md-6\">\r\n            <div class=\"input-group mb-3\">\r\n                <input [(ngModel)]=\"projectTitle\" type=\"text\" class=\"form-control\" placeholder=\"Project Title\" aria-label=\"Project Title\" aria-describedby=\"basic-addon2\">\r\n              </div>\r\n        </div>\r\n            \r\n        <div class=\"col-xl-6 text-right\">\r\n          <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to image\" type=\"button\" class=\"btn btn-primary\" (click)=\"rasterize();\">\r\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to image</button> -->\r\n          <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to SVG\" type=\"button\"\r\n            class=\"btn btn-primary\" (click)=\"rasterizeSVG();\">\r\n            <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to SVG</button> -->\r\n          <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save in localStorage\" type=\"button\"\r\n            class=\"btn btn-primary\" (click)=\"saveCanvasToJSON();\">\r\n            <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Save local</button>\r\n          <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Load from localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"loadCanvasFromJSON();\">\r\n                        <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Load local</button> -->\r\n          <!--    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clean Canvas\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmClear();\">\r\n                        <i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Clean</button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-3 col-lg-3 col-md-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Size</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.width\" (keyup)=\"changeSize()\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\">\r\n                  Width\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.height\" (keyup)=\"changeSize()\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\">\r\n                  Height\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Add text</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">\r\n                <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\"\r\n                  class=\"btn btn-primary btn-sm\" (click)=\"addText()\">\r\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Add images</div>\r\n        <div class=\"card-header\"> <input [(ngModel)]=\"ImageSearch\" type=\"text\" class=\"form-control\"\r\n            placeholder=\"Search Images\" aria-label=\"Recipient's username\" aria-describedby=\"MaterialButton-addon2\">\r\n          <div class=\"input-group-append\">\r\n            <button (click)=\"searchImagesByName()\" class=\"btn btn-sm btn-primary btn-centre m-0 search-btn\"\r\n              type=\"button\" id=\"MaterialButton-addon2\">Search</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body max-height\">\r\n            <div *ngIf=\"size.orientation=='horizontal'\">\r\n                <img  style=\"width: 250px; margin-bottom:10px;border-radius: 5%;\" *ngFor=\"let url of defaultHrImgs;let i =index\"\r\n                (click)=\"addApiImageToCanvas(url.largeImageURL)\" [src]=\"url.largeImageURL\">\r\n            </div>\r\n        <div *ngIf=\"size.orientation=='vertical'\">\r\n            <img  style=\"width: 250px;height: 261px; margin-bottom:10px;border-radius: 5%;\" *ngFor=\"let url of defaultVrImgs;let i =index\"\r\n            (click)=\"addApiImageToCanvas(url.largeImageURL)\" [src]=\"url.largeImageURL\">\r\n        </div>\r\n          <img style=\"width: 250px; margin-bottom:10px;border-radius: 5%;\" *ngFor=\"let url of pixabayImages;let i =index\"\r\n            (click)=\"addApiImageToCanvas(url.largeImageURL)\" [src]=\"url.largeImageURL\">\r\n          <button (click)=\"loadMore()\" class=\"btn-primary\">Load More</button>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Upload image</div>\r\n        <div class=\"card-body text-center\">\r\n          <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\" (click)=\"addImageOnCanvas(url);\">\r\n          <i (click)=\"imageInput.click()\" class=\"fa fa-upload fa-2x cursor\" aria-hidden=\"true\"></i>\r\n          <input class=\"hide\" #imageInput type=\"file\" (change)=\"readUrl($event);\">\r\n          <br />\r\n          <br />\r\n          <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n            <div class=\"btn-group\" role=\"group\">\r\n              <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeWhite(url);\">\r\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remove</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Add figure</div>\r\n        <div class=\"card-body text-center max-height\">\r\n          <div role=\"group\" aria-label=\"shapes\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\"><i (click)=\"addFigure('square');\" class=\"fa fa-square fa-4x\"\r\n                  aria-hidden=\"true\"></i></div>\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n              <i (click)=\"addFigure('hollow-square');\" class=\"fa fa-square-o fa-4x\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n                <div class=\"rectangle\" (click)=\"addFigure('rectangle');\"></div>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n                <div class=\"rectangle-hollow\" (click)=\"addFigure('hollow-rectangle');\"></div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n                <div class=\"triangle t-div\" (click)=\"addFigure('triangle');\"></div>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n                <div (click)=\"addFigure('hollow-triangle');\" class=\"hollow-triangle t-div\">\r\n                  <div class=\"empty\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n                <i (click)=\"addFigure('circle');\" class=\"fa fa-circle fa-4x\" aria-hidden=\"true\"></i>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n                <i (click)=\"addFigure('hollow-circle');\" class=\"fa fa-circle-o fa-4x\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-sm-6 col-lg-6 cursor hv-blue p-2\">\r\n                <i (click)=\"addFigure('line');\" class=\"fa fa-arrows-h fa-4x\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-6 col-lg-6 col-md-6 custom-content\">\r\n      <canvas  id=\"canvas\"></canvas>\r\n      <div *ngIf=\"isBeingCropped\">\r\n          <image-cropper\r\n          [imageBase64]=\"imageToCrop\"\r\n          [maintainAspectRatio]=\"true\"\r\n          [aspectRatio]=\"cropperWidth / cropperHeight\"\r\n          format=\"png\"\r\n          (imageCropped)=\"imageCropped($event)\"\r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\"\r\n          (loadImageFailed)=\"loadImageFailed()\"\r\n      ></image-cropper>\r\n      <br>\r\n      <div class=\"row\">\r\n        <img  style=\"width: 150px !important;margin-left: 200px;\" [src]=\"croppedImage\" />\r\n        \r\n        <h3 style=\"display: block;\">Preview</h3>\r\n      </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-3 col-md-3\">\r\n      <br />\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Options</div>\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete element\" type=\"button\"\r\n              class=\"btn btn-outline-danger\" [disabled]=\"!selected\" (click)=\"removeSelected();\">\r\n              <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to back\" type=\"button\"\r\n              class=\"btn btn-outline-primary\" [disabled]=\"!selected\" (click)=\"sendToBack();\">\r\n              <i class=\"fa fa-level-down\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to front\" type=\"button\"\r\n              class=\"btn btn-outline-primary\" [disabled]=\"!selected\" (click)=\"bringToFront();\">\r\n              <i class=\"fa fa-level-up\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clone\" type=\"button\"\r\n              class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\" (click)=\"clone();\">\r\n              <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Display Horizontal\" type=\"button\"\r\n            class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\" (click)=\"clone();\">\r\n            <img  style=\"width: 30px !important; cursor: pointer;\" (click)=\"makeHorizontal();\" src=\"../assets/img/horizontal.png\" alt=\"horizontal\">\r\n          </button>\r\n          <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Display Vertical\" type=\"button\"\r\n          class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\" (click)=\"clone();\">\r\n          <img  style=\"width: 30px !important; cursor: pointer;\" (click)=\"makeVertical();\" src=\"../assets/img/vertical.png\" alt=\"vertical\">\r\n        </button>\r\n            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Unselect\" type=\"button\"\r\n              class=\"btn btn-outline-primary\" [disabled]=\"!selected\" (click)=\"cleanSelect()\">\r\n              <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n\r\n      <div *ngIf=\"imageEditor\" class=\"card\" >\r\n        <div class=\"card-header\">Filters</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"custom-item\">\r\n            <div class=\"custom-item-title\">Select Image Filter</div>\r\n            <div class=\"custom-item-body\">\r\n              <select [(ngModel)]=\"selectedImageFilter\" (change)=\"applyFilter($event.target.value)\"  class=\"form-control\">\r\n                <option *ngFor=\"let filter of imageFilters;let i = index;\"   [value]=\"filter\">{{filter}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div><br>\r\n      <div *ngIf=\"imageEditor\" class=\"card\" >\r\n          <div class=\"card-header\">Image Cropper</div>\r\n          <div class=\"card-body\">\r\n            <div class=\"custom-item\">\r\n              <div class=\"custom-item-title\">Cropper Configuration</div>\r\n              <div class=\"custom-item-body\">\r\n                <div class=\"row\">\r\n                    <div style=\"text-align: center;\" class=\"col-xl-6 col-md-6\"><span>Width</span></div>\r\n                    <div style=\"text-align: center;\" class=\"col-xl-6 col-md-6\"><span>Height</span></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-6 col-md-6\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <input style=\"text-align: center;\" [(ngModel)]=\"cropperWidth\" type=\"number\" class=\"form-control\" placeholder=\"Width\" aria-label=\"Project Title\" aria-describedby=\"basic-addon2\">\r\n                          </div>\r\n                    </div>\r\n                    <div class=\"col-xl-6 col-md-6\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <input style=\"text-align: center;\" [(ngModel)]=\"cropperHeight\" type=\"number\" class=\"form-control\" placeholder=\"Height\" aria-label=\"Project Title\" aria-describedby=\"basic-addon2\">\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div style=\"text-align: center;\" class=\"col-xl-6 col-md-6\"><button (click)=\"startCropping()\" class=\"btn btn-primary btn-sm\">Crop</button></div>\r\n                    <div style=\"text-align: center;\" class=\"col-xl-6 col-md-6\"><button (click)=\"saveCroppedImage()\" class=\"btn btn-secondary btn-sm\">Save</button></div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div><br>\r\n\r\n      <div class=\"card\" *ngIf=\"!selected\">\r\n        <div class=\"card-header\">Canvas</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"custom-item\" *ngIf=\"!props.canvasImage\">\r\n            <div class=\"custom-item-title\">Background Color</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.canvasFill\"\r\n                [style.background]=\"props.canvasFill\" [value]=\"props.canvasFill\" (colorPickerChange)=\"setCanvasFill()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"custom-item\">\r\n            <div class=\"custom-item-title\">Background Image (url)</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"http://example.jpg\" [(ngModel)]=\"props.canvasImage\"\r\n                (keyup)=\"setCanvasImage()\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Custom</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"custom-item\" *ngIf=\"selected  && selected.type == 'group'\">Group Selected</div>\r\n          <div class=\"custom-item\" *ngIf=\"!selected\">No items selected</div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n            <div class=\"custom-item-title\">ID</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"props.id\" (keyup)=\"setId()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n            <div class=\"custom-item-title\">Opacity</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"range\" [(ngModel)]=\"props.opacity\" (change)=\"setOpacity()\">{{props.opacity}}</div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && textEditor || selected && figureEditor\">\r\n            <div class=\"custom-item-title\">Fill</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.fill\"\r\n                [style.background]=\"props.fill\" [value]=\"props.fill\" (colorPickerChange)=\"setFill()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n            <div class=\"custom-item-title\">Font family</div>\r\n            <div class=\"custom-item-body\">\r\n              <select [(ngModel)]=\"props.fontFamily\" class=\"form-control\" (change)=\"setFontFamily()\">\r\n                <option style=\"font-family:'Arial' ;\" value=\"arial\">Arial</option>\r\n                <option style=\"font-family:'Helvetica' ;\" value=\"helvetica\" selected>Helvetica</option>\r\n                <option style=\"font-family:'Verdana' ;\" value=\"verdana\">Verdana</option>\r\n                <option style=\"font-family:'Courier' ;\" value=\"courier\">Courier</option>\r\n                <option style=\"font-family:'Roboto';\" value=\"Roboto\">Roboto</option>\r\n                <option style=\"font-family:'Open Sans';\" value=\"Open Sans\">Open Sans</option>\r\n                <option style=\"font-family:'Zilla Slab' ;\" value=\"Zilla Slab\">Zilla Slab</option>\r\n                <option style=\"font-family:'Lato' ;\" value=\"Lato\">Lato</option>\r\n                <option style=\"font-family: 'Bellefair';\" value=\"Bellefair\">Bellefair</option>\r\n                <option style=\"font-family: 'Fresca';\" value=\"Fresca\">Fresca</option>\r\n                <option style=\"font-family: 'Raleway';\" value=\"Raleway\">Raleway</option>\r\n                <option style=\"font-family: 'Open Sans Condensed';\" value=\"Open Sans Condensed\">Open Sans Condensed</option>\r\n                <option style=\"font-family:'Indie Flower' ;\" value=\"Indie Flower\">Indie Flower</option>\r\n                <option style=\"font-family:'Josefin Sans' ;\" value=\"Josefin Sans\">Josefin Sans</option>\r\n                <option style=\"font-family: 'Inconsolata';\" value=\"Inconsolata\">Inconsolata</option>\r\n                <option style=\"font-family: 'Pacifico';\" value=\"Pacifico\">Pacifico</option>\r\n                <option style=\"font-family: 'Gloria Hallelujah';\" value=\"Gloria Hallelujah\">Gloria Hallelujah</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n            <div class=\"custom-item-title\">Text Align</div>\r\n            <div class=\"custom-item-body text-center\">\r\n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'left' }\"\r\n                  (click)=\"setTextAlign('left')\">\r\n                  <i class=\"fa fa-align-left\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'center' }\"\r\n                  (click)=\"setTextAlign('center')\">\r\n                  <i class=\"fa fa-align-center\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'right' }\"\r\n                  (click)=\"setTextAlign('right')\">\r\n                  <i class=\"fa fa-align-right\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'justify' }\"\r\n                  (click)=\"setTextAlign('justify')\">\r\n                  <i class=\"fa fa-align-justify\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n            <div class=\"custom-item-title\">Style</div>\r\n            <div class=\"custom-item-body text-center\">\r\n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontWeight }\"\r\n                  (click)=\"setBold()\">\r\n                  <i class=\"fa fa-bold\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontStyle }\"\r\n                  (click)=\"setFontStyle()\">\r\n                  <i class=\"fa fa-italic\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                  [ngClass]=\"{'active': hasTextDecoration('underline') }\" (click)=\"setTextDecoration('underline')\">\r\n                  <i class=\"fa fa-underline\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                  [ngClass]=\"{'active': hasTextDecoration('overline') }\" (click)=\"setTextDecoration('overline')\">\r\n                  <i class=\"fa fa-underline fa-flip-vertical\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                  [ngClass]=\"{'active': hasTextDecoration('line-through') }\"\r\n                  (click)=\"setTextDecoration('line-through')\">\r\n                  <i class=\"fa fa-strikethrough\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n            <div class=\"custom-item-title\">Font Size</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"range\" [(ngModel)]=\"props.fontSize\" (change)=\"setFontSize()\" step=\"1\" min=\"1\"\r\n                max=\"120\">{{props.fontSize}}</div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n            <div class=\"custom-item-title\">Line Height</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"range\" [(ngModel)]=\"props.lineHeight\" (change)=\"setLineHeight()\" step=\"0.1\" min=\"0\"\r\n                max=\"10\">{{props.lineHeight}}</div>\r\n          </div>\r\n          <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n            <div class=\"custom-item-title\">Char Spacing</div>\r\n            <div class=\"custom-item-body\">\r\n              <input type=\"range\" [(ngModel)]=\"props.charSpacing\" (change)=\"setCharSpacing()\" step=\"10\" min=\"-200\"\r\n                max=\"800\">{{props.charSpacing}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fabric__ = __webpack_require__("../../../../fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service__ = __webpack_require__("../../../../../src/app/services/flickr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(flickr, ref, cookieService, el) {
        this.flickr = flickr;
        this.ref = ref;
        this.cookieService = cookieService;
        this.el = el;
        this.props = {
            canvasFill: '#ffffff',
            canvasImage: '',
            id: null,
            opacity: null,
            fill: null,
            fontSize: null,
            lineHeight: null,
            charSpacing: null,
            fontWeight: null,
            fontStyle: null,
            textAlign: null,
            fontFamily: null,
            TextDecoration: ''
        };
        this.url = '';
        this.size = {
            width: 500,
            height: 700,
            orientation: "vertical"
        };
        this.globalEditor = false;
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
        this.ImageSearch = 'flowers';
        this.flickrPicUrls = [];
        this.lastPageCount = 1;
        this.pixabayImages = [];
        this.imageFilters = [];
        this.selectedImageFilter = "none";
        this.tempImage = false;
        this.filterImages = [];
        this.projectTitle = 'Untitled Project';
        this.cropperWidth = 3;
        this.cropperHeight = 4;
        this.isBeingCropped = false;
        this.defaultHrImgs = [{ largeImageURL: "../assets/img/1h.jpg" },
            { largeImageURL: "../assets/img/2h.jpg" },
            { largeImageURL: "../assets/img/3h.jpg" },
            { largeImageURL: "../assets/img/4h.jpg" },
            { largeImageURL: "../assets/img/5h.jpg" },
            { largeImageURL: "../assets/img/6h.jpg" },
            { largeImageURL: "../assets/img/7h.jpg" },
            { largeImageURL: "../assets/img/8h.jpg" },
            { largeImageURL: "../assets/img/9h.jpg" },
            { largeImageURL: "../assets/img/10h.jpg" }];
        this.defaultVrImgs = [{ largeImageURL: "../assets/img/1v.jpg" },
            { largeImageURL: "../assets/img/2v.jpg" },
            { largeImageURL: "../assets/img/3v.jpg" },
            { largeImageURL: "../assets/img/4v.jpg" },
            { largeImageURL: "../assets/img/5v.jpg" },
            { largeImageURL: "../assets/img/6v.jpg" },
            { largeImageURL: "../assets/img/7v.jpg" },
            { largeImageURL: "../assets/img/8v.jpg" },
            { largeImageURL: "../assets/img/9v.jpg" },
            { largeImageURL: "../assets/img/10v.jpg" }];
        // *********************************************
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageFilters = pixelsJS.getFilterList();
        //populating images from third party api
        this.getApiImages({
            searchTerm: this.ImageSearch,
            pageNumber: this.lastPageCount,
            isNewData: true,
            orientation: this.size.orientation
        });
        //setup front side canvas
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'red',
            preserveObjectStacking: true
        });
        this.canvas.on({
            'object:moving': function (e) { },
            'object:modified': function (e) { },
            'object:selected': function (e) {
                var selectedObject = e.target;
                _this.selected = selectedObject;
                selectedObject.hasRotatingPoint = true;
                selectedObject.transparentCorners = false;
                selectedObject.cornerColor = 'rgba(255, 87, 34, 0.7)';
                _this.resetPanels();
                if (selectedObject.type !== 'group' && selectedObject) {
                    _this.getId();
                    _this.getOpacity();
                    switch (selectedObject.type) {
                        case 'rect':
                        case 'circle':
                        case 'triangle':
                            _this.figureEditor = true;
                            _this.getFill();
                            break;
                        case 'i-text':
                            _this.textEditor = true;
                            _this.getLineHeight();
                            _this.getCharSpacing();
                            _this.getBold();
                            _this.getFontStyle();
                            _this.getFill();
                            _this.getTextDecoration();
                            _this.getTextAlign();
                            _this.getFontFamily();
                            break;
                        case 'image':
                            _this.imageEditor = true;
                            break;
                    }
                }
            },
            'selection:cleared': function (e) {
                _this.selected = null;
                _this.resetPanels();
            }
        });
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
        // get references to the html canvas element & its context
        // this.canvas.on('mouse:down', (e) => {
        // let canvasElement: any = document.getElementById('canvas');
        // console.log(canvasElement)
        // });
    };
    /*------------------------Block elements------------------------*/
    //Block "Size"
    AppComponent.prototype.changeSize = function (event) {
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    };
    //Block "Add text"
    AppComponent.prototype.addText = function () {
        var textString = this.textString;
        var text = new fabric.IText(textString, {
            left: 10,
            top: 10,
            fontFamily: 'helvetica',
            angle: 0,
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: '',
            hasRotatingPoint: true
        });
        this.extend(text, this.randomId());
        this.canvas.add(text);
        this.selectItemAfterAdded(text);
        this.textString = '';
    };
    //Block "Add images"
    AppComponent.prototype.getImgPolaroid = function (event) {
        var _this = this;
        var el = event.target;
        fabric.Image.fromURL(el.src, function (image) {
            image.set({
                left: 10,
                top: 10,
                angle: 0,
                padding: 10,
                cornersize: 10,
                hasRotatingPoint: true,
                peloas: 12
            });
            image.setWidth(150);
            image.setHeight(150);
            _this.extend(image, _this.randomId());
            _this.canvas.add(image);
            _this.selectItemAfterAdded(image);
        });
    };
    //Block "Upload Image"
    AppComponent.prototype.addImageOnCanvas = function (url) {
        var _this = this;
        if (url) {
            fabric.Image.fromURL(url, function (image) {
                image.set({
                    left: 0,
                    top: 0,
                    angle: 0,
                    padding: 10,
                    cornersize: 10,
                    hasRotatingPoint: true
                });
                image.setWidth(_this.size.width);
                image.setHeight(_this.size.height);
                _this.extend(image, _this.randomId());
                _this.canvas.add(image);
                _this.selectItemAfterAdded(image);
            }, {
                crossOrigin: "www.google.com"
            });
        }
    };
    AppComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target['result'];
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AppComponent.prototype.removeWhite = function (url) {
        this.url = '';
    };
    ;
    //Block "Add figure"
    AppComponent.prototype.addFigure = function (figure) {
        var add;
        switch (figure) {
            case 'rectangle':
                add = new fabric.Rect({
                    width: 500,
                    height: 800,
                    left: 10,
                    top: 10,
                    angle: 0,
                    fill: '#3f51b5'
                });
                break;
            case 'hollow-rectangle':
                add = new fabric.Rect({
                    width: 500,
                    height: 800,
                    left: 10,
                    top: 10,
                    angle: 0,
                    fill: "rgba(0,0,0,0.0)",
                    stroke: "red",
                    strokeWidth: 5
                });
                break;
            case 'square':
                add = new fabric.Rect({
                    width: 400,
                    height: 400,
                    left: 10,
                    top: 10,
                    angle: 0,
                    fill: '#4caf50'
                });
                break;
            case 'hollow-square':
                add = new fabric.Rect({
                    width: 100,
                    height: 100,
                    left: 10,
                    top: 10,
                    angle: 0,
                    fill: "rgba(0,0,0,0.0)",
                    stroke: "red",
                    strokeWidth: 5
                });
                break;
            case 'triangle':
                add = new fabric.Triangle({
                    width: 100,
                    height: 100,
                    left: 10,
                    top: 10,
                    fill: '#2196f3'
                });
                break;
            case 'hollow-triangle':
                add = new fabric.Triangle({
                    width: 100,
                    height: 100,
                    left: 10,
                    top: 10,
                    fill: "rgba(0,0,0,0.0)",
                    stroke: "red",
                    strokeWidth: 5
                });
                break;
            case 'circle':
                add = new fabric.Circle({
                    radius: 50,
                    left: 10,
                    top: 10,
                    fill: '#ff5722'
                });
                break;
            case 'hollow-circle':
                add = new fabric.Circle({
                    radius: 50,
                    left: 10,
                    top: 10,
                    fill: "rgba(0,0,0,0.0)",
                    stroke: "red",
                    strokeWidth: 5
                });
                break;
            case 'ellipse':
                add = new fabric.Ellipse({
                    radius: 50,
                    left: 10,
                    top: 10,
                    fill: "#2196f3"
                });
                break;
            case 'hollow-ellipse':
                add = new fabric.Ellipse({
                    radius: 50,
                    left: 10,
                    top: 10,
                    fill: "rgba(0,0,0,0.0)",
                    stroke: "red",
                    strokeWidth: 5
                });
                break;
            case 'line':
                add = new fabric.Line([250, 125, 250, 175], {
                    fill: 'red',
                    stroke: "red"
                });
                break;
            case 'polyline':
                add = new fabric.Polyline([250, 125, 250, 175, 25], {
                    fill: 'red',
                    stroke: "red",
                });
                break;
        }
        this.extend(add, this.randomId());
        this.canvas.add(add);
        this.selectItemAfterAdded(add);
    };
    /*Canvas*/
    AppComponent.prototype.cleanSelect = function () {
        this.canvas.deactivateAllWithDispatch().renderAll();
    };
    AppComponent.prototype.selectItemAfterAdded = function (obj) {
        this.canvas.deactivateAllWithDispatch().renderAll();
        this.canvas.setActiveObject(obj);
    };
    AppComponent.prototype.setCanvasFill = function () {
        if (!this.props.canvasImage) {
            this.canvas.backgroundColor = this.props.canvasFill;
            this.canvas.renderAll();
        }
    };
    AppComponent.prototype.extend = function (obj, id) {
        obj.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(obj.toObject);
    };
    AppComponent.prototype.setCanvasImage = function () {
        var self = this;
        if (this.props.canvasImage) {
            this.canvas.setBackgroundColor({
                source: this.props.canvasImage,
                repeat: 'repeat'
            }, function () {
                // self.props.canvasFill = '';
                self.canvas.renderAll();
            });
        }
    };
    AppComponent.prototype.randomId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    /*------------------------Global actions for element------------------------*/
    AppComponent.prototype.getActiveStyle = function (styleName, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return '';
        return (object.getSelectionStyles && object.isEditing) ?
            (object.getSelectionStyles()[styleName] || '') :
            (object[styleName] || '');
    };
    AppComponent.prototype.setActiveStyle = function (styleName, value, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return;
        if (object.setSelectionStyles && object.isEditing) {
            var style = {};
            style[styleName] = value;
            object.setSelectionStyles(style);
            object.setCoords();
        }
        else {
            object.set(styleName, value);
        }
        object.setCoords();
        this.canvas.renderAll();
    };
    AppComponent.prototype.getActiveProp = function (name) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return '';
        return object[name] || '';
    };
    AppComponent.prototype.setActiveProp = function (name, value) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return;
        object.set(name, value).setCoords();
        this.canvas.renderAll();
    };
    AppComponent.prototype.clone = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            var clone = void 0;
            switch (activeObject.type) {
                case 'rect':
                    clone = new fabric.Rect(activeObject.toObject());
                    break;
                case 'circle':
                    clone = new fabric.Circle(activeObject.toObject());
                    break;
                case 'triangle':
                    clone = new fabric.Triangle(activeObject.toObject());
                    break;
                case 'i-text':
                    clone = new fabric.IText('', activeObject.toObject());
                    break;
                case 'image':
                    clone = fabric.util.object.clone(activeObject);
                    break;
            }
            if (clone) {
                clone.set({
                    left: 10,
                    top: 10
                });
                this.canvas.add(clone);
                this.selectItemAfterAdded(clone);
            }
        }
    };
    AppComponent.prototype.getId = function () {
        this.props.id = this.canvas.getActiveObject().toObject().id;
    };
    AppComponent.prototype.setId = function () {
        var val = this.props.id;
        var complete = this.canvas.getActiveObject().toObject();
        console.log(complete);
        this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
        };
    };
    AppComponent.prototype.getOpacity = function () {
        this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    };
    AppComponent.prototype.setOpacity = function () {
        this.setActiveStyle('opacity', parseInt(this.props.opacity) / 100, null);
    };
    AppComponent.prototype.getFill = function () {
        this.props.fill = this.getActiveStyle('fill', null);
    };
    AppComponent.prototype.setFill = function () {
        this.setActiveStyle('fill', this.props.fill, null);
    };
    AppComponent.prototype.getLineHeight = function () {
        this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    };
    AppComponent.prototype.setLineHeight = function () {
        this.setActiveStyle('lineHeight', parseFloat(this.props.lineHeight), null);
    };
    AppComponent.prototype.getCharSpacing = function () {
        this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    };
    AppComponent.prototype.setCharSpacing = function () {
        this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    };
    AppComponent.prototype.getFontSize = function () {
        this.props.fontSize = this.getActiveStyle('fontSize', null);
    };
    AppComponent.prototype.setFontSize = function () {
        this.setActiveStyle('fontSize', parseInt(this.props.fontSize), null);
    };
    AppComponent.prototype.getBold = function () {
        this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    };
    AppComponent.prototype.setBold = function () {
        this.props.fontWeight = !this.props.fontWeight;
        this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    };
    AppComponent.prototype.getFontStyle = function () {
        this.props.fontStyle = this.getActiveStyle('fontStyle', null);
    };
    AppComponent.prototype.setFontStyle = function () {
        this.props.fontStyle = !this.props.fontStyle;
        this.setActiveStyle('fontStyle', this.props.fontStyle ? 'italic' : '', null);
    };
    AppComponent.prototype.getTextDecoration = function () {
        this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    };
    AppComponent.prototype.setTextDecoration = function (value) {
        var iclass = this.props.TextDecoration;
        if (iclass.includes(value)) {
            iclass = iclass.replace(RegExp(value, "g"), "");
        }
        else {
            iclass += " " + value;
        }
        this.props.TextDecoration = iclass;
        this.setActiveStyle('textDecoration', this.props.TextDecoration, null);
    };
    AppComponent.prototype.hasTextDecoration = function (value) {
        return this.props.TextDecoration.includes(value);
    };
    AppComponent.prototype.getTextAlign = function () {
        this.props.textAlign = this.getActiveProp('textAlign');
    };
    AppComponent.prototype.setTextAlign = function (value) {
        this.props.textAlign = value;
        this.setActiveProp('textAlign', this.props.textAlign);
    };
    AppComponent.prototype.getFontFamily = function () {
        this.props.fontFamily = this.getActiveProp('fontFamily');
    };
    AppComponent.prototype.setFontFamily = function () {
        this.setActiveProp('fontFamily', this.props.fontFamily);
    };
    /*System*/
    AppComponent.prototype.removeSelected = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            this.canvas.remove(activeObject);
            // this.textString = '';
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            var self_1 = this;
            objectsInGroup.forEach(function (object) {
                self_1.canvas.remove(object);
            });
        }
    };
    AppComponent.prototype.bringToFront = function () {
        var _this = this;
        // ****************************old code 
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            this.canvas.setActiveObject(activeObject);
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                // object.bringToFront();
                _this.canvas.bringToFront(object);
            });
        }
    };
    AppComponent.prototype.sendToBack = function () {
        var _this = this;
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        console.log("this is active obj ", activeObject);
        console.log("this is active group ", activeGroup);
        if (activeObject) {
            // activeObject.sendToBack();
            this.canvas.sendToBack(activeObject);
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                // object.sendToBack();
                _this.canvas.sendToBack(object);
            });
        }
    };
    AppComponent.prototype.confirmClear = function () {
        if (confirm('Are you sure?')) {
            this.canvas.clear();
        }
    };
    AppComponent.prototype.rasterize = function () {
        if (!fabric.Canvas.supports('toDataURL')) {
            alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
            console.log(this.canvas.toDataURL('png'));
            //window.open(this.canvas.toDataURL('png'));
            var image = new Image();
            image.src = this.canvas.toDataURL('png');
            var w = window.open("");
            w.document.write(image.outerHTML);
        }
    };
    AppComponent.prototype.rasterizeSVG = function () {
        console.log(this.canvas.toSVG());
        // var canvas:HTMLCanvasElement =this.canvas;
        // // let image = canvas.toDataURL("image/svg", 1.0).replace("image/svg", "image/octet-stream");
        // let image = this.canvas.toSVG()
        // svg.svgAsPngUri(image, {}, (uri) => {
        //   var link = document.createElement('a');
        // link.download = "my-image.svg";
        // link.href = uri;
        // link.click();
        // });
        var w = window.open("");
        w.document.write(this.canvas.toSVG());
    };
    ;
    AppComponent.prototype.saveCanvasToJSON = function () {
        // let json = JSON.stringify(this.canvas);
        // localStorage.setItem('Kanvas', json);
        // console.log('json');
        // console.log(json);
        var canvas = this.canvas;
        var image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
        link.download = this.projectTitle + ".png";
        link.href = image;
        link.click();
    };
    AppComponent.prototype.loadCanvasFromJSON = function () {
        var _this = this;
        var CANVAS = localStorage.getItem('Kanvas');
        // and load everything from the same json
        this.canvas.loadFromJSON(CANVAS, function () {
            console.log('CANVAS untar');
            console.log(CANVAS);
            // making sure to render canvas at the end
            _this.canvas.renderAll();
            // and checking if object's "name" is preserved
            console.log('this.canvas.item(0).name');
            console.log(_this.canvas);
        });
    };
    ;
    AppComponent.prototype.rasterizeJSON = function () {
        this.json = JSON.stringify(this.canvas, null, 2);
    };
    AppComponent.prototype.resetPanels = function () {
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    };
    AppComponent.prototype.makeHorizontal = function () {
        this.size.width = 500;
        this.size.height = 300;
        this.size.orientation = "horizontal";
        this.changeOrientation();
    };
    AppComponent.prototype.makeVertical = function () {
        this.size.width = 500;
        this.size.height = 600;
        this.size.orientation = "vertical";
        this.changeOrientation();
    };
    AppComponent.prototype.changeOrientation = function () {
        this.getApiImages({
            searchTerm: this.ImageSearch,
            pageNumber: 1,
            isNewData: true,
            orientation: this.size.orientation
        });
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    };
    AppComponent.prototype.getApiImages = function (searchObject) {
        var _this = this;
        this.flickr.getPicsFromPixabay(searchObject).subscribe(function (data) {
            if (data && data["hits"].length > 0) {
                if (searchObject["isNewData"]) {
                    _this.pixabayImages = [];
                    _this.lastImageSearchTerm = _this.ImageSearch;
                }
                for (var _i = 0, _a = data["hits"]; _i < _a.length; _i++) {
                    var image = _a[_i];
                    _this.pixabayImages.push(image);
                }
                _this.ref.detectChanges();
            }
            else {
                alert("no images available for this search term");
            }
        });
    };
    AppComponent.prototype.loadMore = function () {
        if (this.ImageSearch == this.lastImageSearchTerm) {
            this.lastPageCount++;
            this.getApiImages({
                searchTerm: this.ImageSearch,
                pageNumber: this.lastPageCount,
                isNewData: false,
                orientation: this.size.orientation
            });
        }
    };
    AppComponent.prototype.searchImagesByName = function () {
        console.log("this is the search by name", name);
        this.getApiImages({
            searchTerm: this.ImageSearch,
            pageNumber: this.lastPageCount,
            isNewData: true,
            orientation: this.size.orientation
        });
    };
    AppComponent.prototype.addApiImageToCanvas = function (url) {
        this.cookieService.deleteAll();
        this.addImageOnCanvas(url);
    };
    AppComponent.prototype.applyFilter = function (filtername) {
        // get the canvas convert it into image ;
        this.cleanSelect();
        var canvas = this.canvas;
        var unfilteredImage = new Image();
        unfilteredImage.width = this.canvas.width;
        unfilteredImage.height = this.canvas.height;
        unfilteredImage.id = "unfilteredImage";
        //  unfilteredImage.src = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
        var canvasUri = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
        var ctx = canvas.getContext("2d");
        unfilteredImage.src = canvasUri;
        var imageData = pixelsJS.filterImg(unfilteredImage, filtername, ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
        var filteredImage = new Image();
        var newCan = document.createElement("canvas");
        newCan.height = this.canvas.height - 60;
        newCan.width = this.canvas.width - 50;
        var newCtx = newCan.getContext("2d");
        newCtx.putImageData(imageData, 0, 0);
        filteredImage.src = newCan.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
        //  let tempDiv  = document.getElementById('temp');
        //   tempDiv.appendChild(newCan);
        this.canvas.clear();
        this.addImageOnCanvas(filteredImage.src);
        this.canvas.renderAll();
    };
    AppComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    AppComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    AppComponent.prototype.startCropping = function () {
        // this function starts the cropping function
        var canvas = this.canvas;
        this.imageToCrop = canvas.toDataURL();
        this.isBeingCropped = true;
        var originalCanvas = document.getElementById('canvas');
        originalCanvas.style.visibility = "hidden";
    };
    AppComponent.prototype.saveCroppedImage = function () {
        // let cropedImageToSave =new Image();
        // cropedImageToSave.src = this.croppedImage;
        this.canvas.clear();
        this.addImageOnCanvas(this.croppedImage);
        this.canvas.renderAll();
        this.isBeingCropped = false;
        var originalCanvas = document.getElementById('canvas');
        originalCanvas.style.visibility = "visible";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_flickr_service__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_flickr_service__ = __webpack_require__("../../../../../src/app/services/flickr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_flickr_service__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__["a" /* CookieService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/flickr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.flickrParams = {
            params: {
                // api_key:'c28c40210d45d354468a989246cd4b54',
                api_key: '1eeaf5871523c631eb5399164786ac70',
                format: 'json',
                // nojsoncallback:'1',
                nojsoncallback: '1',
                per_page: '30'
            }
        };
        this.flickrUrl = "https://api.flickr.com/services/rest/";
    }
    FlickrService.prototype.getRandomPics = function (pageNumber, searchTerm) {
        var API_URL = this.flickrUrl;
        this.flickrParams.params['method'] = 'flickr.photos.search';
        this.flickrParams.params['tags'] = searchTerm;
        this.flickrParams.params['text'] = searchTerm;
        this.flickrParams.params['page'] = pageNumber.toString();
        return this.http.get(API_URL, this.flickrParams);
    };
    FlickrService.prototype.formFlickrData = function (picData) {
        return 'http://farm' + picData.farm + '.static.flickr.com/' + picData.server + '/' + picData.id + '_' + picData.secret + '.jpg';
    };
    FlickrService.prototype.getPicsFromPixabay = function (data) {
        //  return this.http.get( 'https://pixabay.com/api/?key=14012248-edbebfcd20adb4fbf2ea15596&q=yellow+flowers&image_type=photo');
        return this.http.get('https://pixabay.com/api/?key=14012248-edbebfcd20adb4fbf2ea15596&q=' + data.searchTerm + '&image_type=photo' + '&page=' + data.pageNumber + '&per_page=30' + '&orientation=' + data.orientation);
    };
    FlickrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map