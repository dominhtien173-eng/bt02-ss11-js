
let devices = [
    {
        id: "DEV_001",
        name: "Dieu hoa phong khach",
        room: "Phong khach",
        isActive: true,
        powerWatts: 1500
    },
    {
        id: "DEV_002",
        name: "Den ngu",
        room: "Phong ngu",
        isActive: true,
        powerWatts: 10
    },
    {
        id: "DEV_003",
        name: "Quat tran",
        room: "Phong khach",
        isActive: false,
        powerWatts: 75
    }
];

const validateDevice = (newDev) => {
    if (!newDev.name || newDev.name.trim() === "") {
        return false;
    }

    if (!newDev.room || newDev.room.trim() === "") {
        return false;
    }

    if (typeof newDev.powerWatts !== "number" || newDev.powerWatts <= 0) {
        return false;
    }

    return true;
};

const createDevice = (list, newDev) => {
    if (!validateDevice(newDev)) {
        console.log("Du lieu thiet bi khong hop le!");
        return false;
    }

    const newId = "DEV_" + String(list.length + 1).padStart(3, "0");

    const device = {
        id: newId,
        name: newDev.name,
        room: newDev.room,
        isActive: newDev.isActive !== undefined ? newDev.isActive : false,
        powerWatts: newDev.powerWatts
    };

    list.push(device);

    return device;
};

const readDevices = (list) => {
    return list;
};

const readDevicesByRoom = (list, roomName) => {
    const result = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i].room.toLowerCase() === roomName.toLowerCase()) {
            result.push(list[i]);
        }
    }

    return result;
};

const updateDevice = (list, id, updateData) => {
    let targetDevice = null;

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            targetDevice = list[i];
            break;
        }
    }

    if (targetDevice === null) {
        return false;
    }

    if (updateData.name !== undefined) {
        if (typeof updateData.name !== "string" || updateData.name.trim() === "") {
            return false;
        }

        targetDevice.name = updateData.name;
    }

    if (updateData.room !== undefined) {
        if (typeof updateData.room !== "string" || updateData.room.trim() === "") {
            return false;
        }

        targetDevice.room = updateData.room;
    }

    if (updateData.isActive !== undefined) {
        if (typeof updateData.isActive !== "boolean") {
            return false;
        }

        targetDevice.isActive = updateData.isActive;
    }

    if (updateData.powerWatts !== undefined) {
        if (typeof updateData.powerWatts !== "number" || updateData.powerWatts <= 0) {
            return false;
        }

        targetDevice.powerWatts = updateData.powerWatts;
    }

    return true;
};

const deleteDevice = (list, id) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1);
            return true;
        }
    }

    return false;
};

console.log("1. Danh sach thiet bi ban dau:");
console.log(readDevices(devices));

console.log("2. Them thiet bi moi:");
console.log(createDevice(devices, {
    name: "Den ban",
    room: "Phong hoc",
    powerWatts: 12,
    isActive: true
}));

console.log("3. Tim thiet bi trong phong khach:");
console.log(readDevicesByRoom(devices, "Phong khach"));

console.log("4. Cap nhat trang thai dieu hoa:");
console.log(updateDevice(devices, "DEV_001", {
    isActive: false
}));
console.log(readDevices(devices));

console.log("5. Cap nhat cong suat den ngu:");
console.log(updateDevice(devices, "DEV_002", {
    powerWatts: 5
}));
console.log(readDevices(devices));

console.log("6. Xoa thiet bi quat tran:");
console.log(deleteDevice(devices, "DEV_003"));
console.log(readDevices(devices));

console.log("7. Kiem tra ID khong ton tai:");
console.log(updateDevice(devices, "DEV_999", {
    isActive: false
}));
console.log(deleteDevice(devices, "DEV_999"));

console.log("8. Kiem tra them thiet bi khong hop le:");
console.log(createDevice(devices, {
    name: "",
    room: "Phong ngu",
    powerWatts: 10
}));

console.log("9. Danh sach cuoi cung:");
console.log(readDevices(devices));
