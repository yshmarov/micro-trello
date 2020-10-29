class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  def sort
    #@list = List.find(params[:list_id])
    @task = Task.find(params[:task_id])
    @task.update(task_params)
    render body: nil
  end

  def new
    @task = Task.new
  end

  def edit
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to lists_url, notice: 'Task was successfully created.'
    else
      render :new
    end
  end

  def update
    if @task.update(task_params)
      redirect_to lists_url, notice: 'Task was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @task.destroy
    redirect_to lists_url, notice: 'Task was successfully destroyed.'
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :list_id, :row_order_position)
    end
end
