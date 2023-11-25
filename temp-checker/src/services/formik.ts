import { useFormik } from "formik";

class FormikService {
    initialValues: object;
    formik: any;

    constructor(initialVaues: object) {
        this.formik = useFormik();
    }
}