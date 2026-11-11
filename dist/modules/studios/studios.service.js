import { getCollection } from "../../config/datrabase.js";
const studiosCollection = getCollection("studios");
export async function findAllStudios() {
    const studios = await studiosCollection.find({}).toArray();
    return studios;
}
export async function findStudioById(id) {
    const studio = await studiosCollection.findOne({
        id
    });
    return studio;
}
export async function createStudio(studioData) {
    const result = await studiosCollection.insertOne(studioData);
    return result;
}
//# sourceMappingURL=studios.service.js.map