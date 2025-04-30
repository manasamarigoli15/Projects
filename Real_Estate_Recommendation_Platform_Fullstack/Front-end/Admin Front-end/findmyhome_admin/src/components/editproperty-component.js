import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getPropertybyId, updateProperty } from "../services/propertyservice";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { uploadMultiple } from "../services/upload";

function EditPropertyComponent() {
    let [property, setproperty] = useState({});
    const params = useParams();

    useEffect(() => {
        getPropertybyId(params.id)
            .then(d => { setproperty(d.data); console.debug(d.data) })
            .catch((error) => console.error(error));

    }, {});

    let nav = useHistory();

    function onPropertyUpdate() {
        let newfiles = uploadMultiple();
        newfiles.then(d => {
            property.Images = [];
            for (var image of d) {
                property.Images.push({ ImageUrl: image });
            }
            // book.category = parseInt(book.category);
            updateProperty(property)
                .then((response) => {
                    console.debug(response.data);
                    alert("Updated Successfully !");
                    nav.push("/dashboard");
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    return (
        <div className="editproperty-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>

            <div className="content">
                <h2 className="mt-4 text-center">Add New Property</h2>
                <hr className="mt-5"></hr>
                <h4>Property Details</h4><hr></hr>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Property Reg.Num</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Property Register Number"
                                    value={property.propertyRegNum}
                                    onChange={(e) => { setproperty({ ...property, propertyregnum: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label className="mb-2" for=""><b>Property Type</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="1 BHK or 2 BHK or 3BHK"
                                    value={property.propertyType}
                                    onChange={(e) => { setproperty({ ...property, propertytype: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Area in Sqft</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Area in sqft"
                                    value={property.areaSqft}
                                    onChange={(e) => { setproperty({ ...property, areaSqft: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Furnished Status</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Furnished status"
                                    value={property.furnishedStatus}
                                    onChange={(e) => { setproperty({ ...property, furnishedStatus: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Number of floors</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Number of floors"
                                    value={property.numberOfFloors}
                                    onChange={(e) => { setproperty({ ...property, numberOfFloors: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Property Age</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Property Age"
                                    value={property.propertyAge}
                                    onChange={(e) => { setproperty({ ...property, propertyAge: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Price</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Property Price"
                                    value={property.price}
                                    onChange={(e) => { setproperty({ ...property, price: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>City</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="City"
                                    value={property.city}
                                    onChange={(e) => { setproperty({ ...property, city: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Location</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Location"
                                    value={property.location}
                                    onChange={(e) => { setproperty({ ...property, location: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Category</b></label>
                                <select
                                    className="form-select"
                                    placeholder="Author Name"
                                    value={property.categoryType}
                                    onChange={(e) => { setproperty({ ...property, categoryType: e.target.value }) }}
                                >
                                    <option value="-1">Select Category</option>
                                    <option value="1">Buy</option>
                                    <option value="2">Sell</option>
                                    <option value="3">Rent</option>
                                </select>
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Want to make it Featured?</b></label>
                                <select
                                    className="form-select"
                                    value={property?.featured}
                                    onChange={(e) => { setproperty({ ...property, featured: e.target.value }) }}
                                >
                                    <option value="-1">Select Yes or No</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>

                                </select>
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Property Status</b></label>
                                <select
                                    className="form-select"
                                    value={property?.propertyStatus}
                                    onChange={(e) => { setproperty({ ...property, propertyStatus: e.target.value }) }}
                                >
                                    <option value="-1">Select Property Status</option>
                                    <option value="1">Requested</option>
                                    <option value="0">Not Requested</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-6">
                                <label for="" className="mb-2"><b>Address</b></label>
                                <textarea type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    value={property.address}
                                    onChange={(e) => { setproperty({ ...property, address: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-5 ms-5">
                                <label for="" className="mt-3  mb-2"><b>Choose Images</b></label>
                                <input type="file" id="file"
                                    className="form-control"
                                    placeholder="Images"
                                    //value={property?.images.imageUrl}
                                    // onChange={(e) => { setproperty({ ...property, images: e.target.value }) }}
                                    required multiple />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-10">
                                <label for="" className="mb-2"><b>Property Description</b></label>
                                <textarea type="text"
                                    className="form-control"
                                    placeholder="Property Description"
                                    value={property.description}
                                    onChange={(e) => { setproperty({ ...property, description: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr className="mt-5"></hr>
                <h4>Agency Details</h4><hr></hr>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-5">
                                <label for="" className="mb-2"><b>Agency Id</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Id"
                                    value={property?.agencyInfo?.agencyId}
                                    onChange={(e) => { setproperty({ ...property, agencyId: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-5 ms-5">
                                <label for="" className="mb-2"><b>Agency Name</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Name"
                                    value={property?.agencyInfo?.agencyName}
                                    onChange={(e) => { setproperty({ ...property, agencyName: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-5">
                                <label for="" className="mb-2"><b>Agency Phone Number</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Phone Number"
                                    value={property?.agencyInfo?.agencyPhoneNumber}
                                    onChange={(e) => { setproperty({ ...property, agencyPhoneNumber: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-5 ms-5">
                                <label for="" className="mb-2"><b>Agency Address</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Agency Address"
                                    value={property?.agencyInfo?.agencyAddress}
                                    onChange={(e) => { setproperty({ ...property, agencyAddress: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div> */}
                <hr className="mt-5"></hr>
                <div className="row mt-4">
                    <div className="col-12">
                        <Link to="/dashboard" className="btn btn-warning ms-4 float-end">Cancel</Link>
                        <button type="button" onClick={onPropertyUpdate} className="btn btn-primary float-end">Update Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPropertyComponent;
