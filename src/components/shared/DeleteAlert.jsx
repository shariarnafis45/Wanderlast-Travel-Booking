"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteAlert({ destinationData }) {
  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    image,
    description,
  } = destinationData;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    redirect('/destinations')
  };
  return (
    <AlertDialog>
      <Button variant="danger-soft" className="rounded-md ">
        <TrashBin /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
