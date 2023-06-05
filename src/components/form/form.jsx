import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";

function Form() {
  const [editForm, setEditForm] = useState(false);

  const handleEditForm = () => {
    setEditForm(!editForm);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setFormValue(data);

  const [formValue, setFormValue] = useState();

  useEffect(() => {
    console.log(formValue);
  }, [formValue]);

  return (
    <div className="section">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="formDetails">
          <div className="grid">
            <div className="grid-block">
              <label>
                <div className="field-label">Name*</div>
                <div className="field-value">
                  {editForm ? (
                    <input
                      type="text"
                      className={editForm ? "field" : "field-disable"}
                      id="name"
                      name="name"
                      {...register("name")}
                    />
                  ) : (
                    <div className="fieldValue">{formValue && formValue.name}</div>
                  )}
                </div>
              </label>
            </div>
            <div className="grid-block">
              <label>
                <div className="field-label">E-mail Address*</div>
                <div className="field-value">
                  {editForm ? (
                    <input
                      type="text"
                      className={editForm ? "field" : "field-disable"}
                      id="name"
                      name="email"
                      {...register("email")}
                    />
                  ) : (
                    <div className="fieldValue">{formValue && formValue.email}</div>
                  )}
                </div>
              </label>
            </div>
            <div className="grid-block">
              <label>
                <div className="field-label">Contact Number*</div>
                <div className="field-value">
                  {editForm ? (
                    <input
                      type="text"
                      className={editForm ? "field" : "field-disable"}
                      id="name"
                      name="phone"
                      {...register("phone")}
                    />
                  ) : (
                    <div className="fieldValue">{formValue && formValue.phone}</div>
                  )}
                </div>
              </label>
            </div>
            <div className="grid__block">
              <label>
                <div className="field-label">Gender*</div>
                {editForm ? (
                  <select
                    className={editForm ? "field" : "field-disable"}
                    name="gender"
                    id="gender"
                    {...register("gender")}
                  >
                    <option value="">- Select -</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                    <option value="I do not wish to say">I do not wish to say</option>
                  </select>
                ) : (
                  <div className="fieldValue">{formValue && formValue.gender}</div>
                )}
              </label>
            </div>
            <div className="grid-block full">
              <label>
                <div className="field-label">Notes*</div>
                <div className="field-value">
                  {editForm ? (
                    <textarea
                      type="text"
                      className={editForm ? "field" : "field-disable"}
                      id="name"
                      name="notes"
                      {...register("notes")}
                    ></textarea>
                  ) : (
                    <div className="fieldValue">{formValue && formValue.notes}</div>
                  )}
                </div>
              </label>
            </div>
            <div className="grid-block full ta-c">
              <button
                type="submit"
                className={
                  editForm ? "button button-disable  " : "button secondary--"
                }
                id="edit"
                onClick={handleEditForm}
              >
                {editForm ? "SAVE" : "EDIT"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
