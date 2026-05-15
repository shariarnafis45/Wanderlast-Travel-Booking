"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbFlagCancel } from "react-icons/tb";

export function EditModal({ destinationData }) {
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    image,
    _id,
    description,
  } = destinationData;
  const onSubmit = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedDestination = Object.fromEntries(formData.entries());
    console.log(updatedDestination);
    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDestination),
    });
    const data = await res.json();
    
  };
  return (
    <Modal>
      <Button variant="secondary" className="rounded-md text-black">
        <FaEdit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <h2 className="text-xl font-semibold ml-10 mt-5">
              Update Travel Package
            </h2>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="p-10 space-y-8 max-w-xl bg-slate-50 rounded-md"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        defaultSelectedKeys={[category]}
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select category"
                      >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item key="Beach" textValue="Beach">
                              Beach
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item key="Mountain" textValue="Mountain">
                              Mountain
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item key="City" textValue="City">
                              City
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item key="Adventure" textValue="Adventure">
                              Adventure
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item key="Cultural" textValue="Cultural">
                              Cultural
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item key="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={image}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}
                  <Modal.Footer className="flex flex-wrap flex-col-reverse sm:flex-row gap-3 mt-10">
                    <Button slot="close" variant="secondary">
                      <RiDeleteBin6Line />
                      Cancel
                    </Button>
                    <Button slot="close" className="rounded-md" type="submit">
                      <FaEdit /> Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
