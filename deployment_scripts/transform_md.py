import sys
import os


def build_yaml_map(source_dir):
    yaml_map = {}
    if os.path.isdir(source_dir):
        for filename in os.listdir(source_dir):
            if filename.endswith(".md"):
                file_path = os.path.join(source_dir, filename)
                with open(file_path, "r") as file:
                    yaml_dash_line_count = 0
                    for line in file:
                        if yaml_dash_line_count == 2:
                            break
                        if '---' in line:
                            yaml_dash_line_count = yaml_dash_line_count + 1
                        if filename not in yaml_map:
                            yaml_map[filename] = []
                        yaml_map[filename].append(line)
    return yaml_map


def transform_markdown(source_dir, transform_dir):
    yaml_map = build_yaml_map(source_dir)
    if os.path.isdir(transform_dir):
        for filename in os.listdir(transform_dir):
            if filename.endswith(".md"):
                file_path = os.path.join(transform_dir, filename)
                if filename in yaml_map:
                    lines = yaml_map[filename]
                    with open(file_path, "r+") as file:
                        content = file.read()
                        file.seek(0, 0)  # Move the file pointer to the beginning
                        for line in lines:
                            file.write(line)  # Add each line to the file
                        file.write(content)


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Please provide two directory paths as command line arguments. The first should be the directory containing the markdown to transform. The second should be the output directory.")
        sys.exit(1)

    source_dir = sys.argv[1]
    transform_dir = sys.argv[2]
    transform_markdown(source_dir, transform_dir)
    print("transformation complete.")

else:
    print("Invalid directory path.")