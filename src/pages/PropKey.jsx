import { useGetPostsQuery, useGetTodosQuery } from "@/services/demo";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { CheckCircle, Circle, GripVertical, User } from "lucide-react";

import { truncateByWords } from "@/utils/string";

function PropKey() {
  const { data: todos, isLoading: todoLoading } = useGetTodosQuery();
  const { data: postsData, isLoading: postLoading } = useGetPostsQuery();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (postsData) {
      const clonedPosts = postsData.map((post) => ({ ...post }));
      setPosts(clonedPosts);
    }
  }, [postsData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your todos and posts efficiently
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Todo List Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Todo List</h2>
              {todos && (
                <span className="ml-auto bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {todos.length} items
                </span>
              )}
            </div>

            {todoLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : todos && todos.length > 0 ? (
              <ul className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                      todo.completed
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {todo.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-gray-500">
                            #{todo.id}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                            <User className="w-3 h-3" />
                            <span>User {todo.userId}</span>
                          </div>
                        </div>
                        <p
                          className={`text-sm ${
                            todo.completed
                              ? "text-gray-600"
                              : "text-gray-800 font-medium"
                          }`}
                        >
                          {todo.title}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No todos found
              </div>
            )}
          </div>

          {/* Post List Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Post List</h2>
              {posts.length > 0 && (
                <span className="ml-auto bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {posts.length} posts
                </span>
              )}
            </div>

            <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800 flex items-center gap-2">
                <GripVertical className="w-4 h-4" />
                <span className="font-medium">
                  Drag & drop to reorder posts
                </span>
              </p>
            </div>

            {postLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              </div>
            ) : posts && posts.length > 0 ? (
              <ReactSortable
                list={posts}
                setList={setPosts}
                animation={200}
                ghostClass="opacity-30"
                className="space-y-3 max-h-[600px] overflow-y-auto pr-2"
              >
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-5 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-purple-300 hover:shadow-lg transition-all duration-200 cursor-move group"
                  >
                    <div className="flex items-start gap-3">
                      <GripVertical className="w-5 h-5 text-gray-400 group-hover:text-purple-500 flex-shrink-0 mt-1 transition-colors" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                            #{post.id}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                            <User className="w-3 h-3" />
                            <span>User {post.userId}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2 leading-snug">
                          {truncateByWords(post.title, 10)}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                          {post.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </ReactSortable>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No posts found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropKey;
