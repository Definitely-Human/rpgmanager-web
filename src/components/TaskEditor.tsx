import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsArrowRepeat, BsCheckAll, BsTrashFill } from 'react-icons/bs';
import { GetOneTaskQuery, Task } from '../__generated__/graphql.ts';
import { selectedItemVar } from '../apollo.ts';
import { convertAPIDateToString } from '../utils/dateTime.ts';
import { GET_TASK } from '../utils/gqlQueries.ts';
import RewardWindow from './RewardWindow.tsx';

const TaskEditor = () => {
  const selectedItem = useReactiveVar(selectedItemVar);
  var task: Task;
  const onCompleted = (data: GetOneTaskQuery) => {
    task = data.getTask.task as Task;
  };
  const [getTaskQuery, isLoading] = useLazyQuery(GET_TASK, { onCompleted });
  const [isEditing, setIsEditing] = useState(selectedItem?.id !== null);
  if (!selectedItem) return null;
  task = {} as Task;
  if (selectedItem.id) {
    getTaskQuery();
  }

  const {
    title,
    content,
    is_complete,
    is_favorite,
    due_to,
    updated_at,
    tags,
    category,
    completion_time,
  } = task;

  const toggleComplete = () => {};
  const toggleFavorite = () => {};

  if (is_complete)
    return (
      <div className="min-h-0 p-3 overflow-auto ">
        <div className="flex justify-between">
          <h3 className="text-3xl text-primary ">{title}</h3>
          <button
            type="button"
            className="text-2xl hover:text-error"
            onClick={() => {}}
          >
            <BsTrashFill />
          </button>
        </div>
        <p className="w-full my-2 font-normal whitespace-pre-wrap">{content}</p>
        <div>
          <span className="text-primary">Completed at: </span>
          {completion_time}
        </div>
        <button
          type="button"
          onClick={toggleComplete}
          className="block px-16 py-2 mx-auto mt-3 border-4 rounded-md border-error hover:bg-gray-blue-800"
        >
          Not complete
        </button>
      </div>
    );
  return (
    <div className="min-h-0 px-3 pt-3 overflow-auto ">
      <form>
        <div className="flex justify-between">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title..."
            className="w-full h-10 px-3 text-2xl bg-transparent text-primary focus:outline-none"
            maxLength={99}
          />
          <div className="flex justify-between w-24 text-2xl">
            <button
              type="button"
              className="w-full hover:text-secondary"
              onClick={toggleFavorite}
            >
              {is_favorite ? <AiFillStar /> : <AiOutlineStar />}
            </button>
            <button
              type="button"
              className="w-full hover:text-error"
              onClick={() => {}}
            >
              <BsTrashFill />
            </button>
            <button type="button" className="w-full text-secondary-600">
              {isLoading ? <BsArrowRepeat /> : <BsCheckAll />}
            </button>
          </div>
        </div>
        <textarea
          placeholder="Content of the task..."
          value={String(content)}
          name="content"
          className="w-full min-h-[100px] font-normal bg-transparent focus:outline-none px-3 border-b-2 border-gray-blue-950 resize-none"
          maxLength={4096}
          rows={7}
        />
        <div className="flex justify-between">
          <span>
            Tags:{' '}
            {/* {tags.map((tag) => {
              return (
                <span key={tag.id}>
                  <span className="hover:underline">{tag.name}</span>
                  <span>, </span>
                </span>
              );
            })} */}
          </span>
          <select
            name="category"
            value={category?.name || ''}
            className="w-48 p-2 text-gray-400 rounded-md bg-gray-blue-700"
          >
            {/* {categories.length ? (
              categories.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue.id}>
                    {itemValue.name}
                  </option>
                );
              })
            ) : (
              <option value="none">none</option>
            )} */}
          </select>
        </div>
        <RewardWindow />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-10 py-2 mt-3 border-4 rounded-md border-secondary hover:bg-gray-blue-800"
          >
            Save
          </button>
          {isEditing && (
            <>
              <button
                type="button"
                onClick={toggleComplete}
                className="px-16 py-2 mt-3 border-4 rounded-md border-primary hover:bg-gray-blue-800"
              >
                Complete
              </button>
              <span className="font-normal text-gray-400">
                Last updated: <br />
                {updated_at && convertAPIDateToString(updated_at)}
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
export default TaskEditor;
